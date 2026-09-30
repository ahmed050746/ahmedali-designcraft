import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import { Dialog, DialogClose, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type ImageLightboxProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  src: string;
  alt: string;
  title: string;
};

function fitSize(naturalW: number, naturalH: number, maxW: number, maxH: number) {
  if (naturalW <= 0 || naturalH <= 0 || maxW <= 0 || maxH <= 0) {
    return { w: 0, h: 0, scale: 1 };
  }
  // Never upscale past native resolution.
  const scale = Math.min(1, maxW / naturalW, maxH / naturalH);
  return {
    w: Math.max(1, Math.round(naturalW * scale)),
    h: Math.max(1, Math.round(naturalH * scale)),
    scale,
  };
}

/** Build gradual zoom steps from "fit" (1) up to "actual size". Never beyond native pixels. */
function buildZoomSteps(maxZoom: number): number[] {
  if (maxZoom <= 1.01) return [1];
  const steps: number[] = [1];
  // ~20% bumps so each click feels like a small zoom, not a jump.
  let value = 1;
  while (value * 1.2 < maxZoom - 0.02) {
    value *= 1.2;
    steps.push(Number(value.toFixed(3)));
  }
  const last = steps[steps.length - 1]!;
  if (last < maxZoom - 0.01) steps.push(Number(maxZoom.toFixed(3)));
  return steps;
}

export function ImageLightbox({ open, onOpenChange, src, alt, title }: ImageLightboxProps) {
  const [zoom, setZoom] = useState(1);
  const [natural, setNatural] = useState({ w: 0, h: 0 });
  const [viewport, setViewport] = useState({ w: 0, h: 0 });
  const stageRef = useRef<HTMLDivElement>(null);

  const resetView = useCallback(() => {
    setZoom(1);
    setNatural({ w: 0, h: 0 });
  }, []);

  useEffect(() => {
    if (!open) resetView();
  }, [open, resetView, src]);

  useEffect(() => {
    if (!open) return;
    const measure = () => {
      const el = stageRef.current;
      if (!el) return;
      setViewport({ w: el.clientWidth, h: el.clientHeight });
    };
    measure();
    const frame = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
    };
  }, [open]);

  const fitted = fitSize(natural.w, natural.h, viewport.w, viewport.h);
  // Max zoom reaches exactly 1 native CSS pixel per image pixel — never larger.
  const maxZoom = fitted.w > 0 ? natural.w / fitted.w : 1;
  const zoomSteps = useMemo(() => buildZoomSteps(maxZoom), [maxZoom]);

  useEffect(() => {
    if (zoom > maxZoom) setZoom(maxZoom);
  }, [maxZoom, zoom]);

  const displayW = Math.round(fitted.w * zoom);
  const displayH = Math.round(fitted.h * zoom);
  const atActual = zoom >= maxZoom - 0.01;
  const canZoomIn = zoomSteps.length > 1 && !atActual;
  const canZoomOut = zoom > 1.01;

  const zoomIn = () => {
    const next = zoomSteps.find((step) => step > zoom + 0.01);
    if (next !== undefined) setZoom(next);
  };

  const zoomOut = () => {
    const prev = [...zoomSteps].reverse().find((step) => step < zoom - 0.01);
    setZoom(prev ?? 1);
  };

  const toggleZoom = () => setZoom(atActual ? 1 : maxZoom);

  /** One step per click — never jumps straight to full native size. */
  const stepZoomOnClick = () => {
    if (canZoomIn) zoomIn();
    else if (atActual) setZoom(1);
  };

  const zoomLabel = atActual ? "1:1" : `${Math.round(zoom * 100)}%`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-ink/90 data-[state=open]:animate-none data-[state=closed]:animate-none" />
        <DialogPrimitive.Content
          className="fixed inset-0 z-50 flex h-[100dvh] w-screen flex-col outline-none"
          onOpenAutoFocus={(event) => event.preventDefault()}
        >
          <DialogPrimitive.Title className="sr-only">{title} — full image</DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            {alt}. Zoom only up to the image&apos;s native resolution. Press Escape to close.
          </DialogPrimitive.Description>

          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-2 p-3 sm:p-4">
            <p className="pointer-events-none rounded-full bg-ink/80 px-3 py-1.5 font-mono text-[14px] uppercase tracking-[0.14em] text-paper/80">
              {natural.w > 0 ? `${natural.w}×${natural.h}` : "…"}
              {zoomSteps.length === 1 ? " · full res" : null}
            </p>
            <div className="pointer-events-auto flex items-center gap-1 rounded-full bg-ink/95 p-1 text-paper shadow-lg ring-1 ring-paper/15">
              <button
                type="button"
                onClick={zoomOut}
                disabled={!canZoomOut}
                className="grid size-9 place-items-center rounded-full transition-colors hover:bg-paper/15 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Zoom out"
              >
                <ZoomOut className="size-4" />
              </button>
              <span className="min-w-[3.5rem] text-center font-mono text-[14px] uppercase tracking-[0.12em]">
                {zoomLabel}
              </span>
              <button
                type="button"
                onClick={zoomIn}
                disabled={!canZoomIn}
                className="grid size-9 place-items-center rounded-full transition-colors hover:bg-paper/15 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Zoom in"
                title={
                  canZoomIn
                    ? "Zoom toward native resolution"
                    : "Already at native resolution — use a larger source file for more zoom"
                }
              >
                <ZoomIn className="size-4" />
              </button>
              {zoomSteps.length > 1 ? (
                <button
                  type="button"
                  onClick={toggleZoom}
                  className="hidden rounded-full px-3 py-2 font-mono text-[14px] uppercase tracking-[0.12em] transition-colors hover:bg-paper/15 sm:block"
                  aria-label={atActual ? "Fit to screen" : "View at native size"}
                >
                  {atActual ? "Fit" : "1:1"}
                </button>
              ) : null}
              <DialogClose
                className="grid size-9 place-items-center rounded-full transition-colors hover:bg-paper/15"
                aria-label="Close"
              >
                <X className="size-4" />
              </DialogClose>
            </div>
          </div>

          <div
            ref={stageRef}
            className={cn(
              "min-h-0 flex-1 overflow-auto overscroll-contain px-3 pb-3 pt-16 sm:px-8 sm:pb-8 sm:pt-20",
              canZoomIn ? "cursor-zoom-in" : atActual ? "cursor-zoom-out" : "cursor-default",
            )}
            onClick={stepZoomOnClick}
            onWheel={(event) => {
              if (!(event.ctrlKey || event.metaKey)) return;
              event.preventDefault();
              if (event.deltaY < 0) zoomIn();
              else zoomOut();
            }}
          >
            <div
              className="mx-auto flex items-center justify-center"
              style={{
                width: Math.max(displayW || 0, viewport.w || 0) || "100%",
                minHeight: "100%",
              }}
            >
              <img
                src={src}
                alt={alt}
                width={natural.w || undefined}
                height={natural.h || undefined}
                decoding="sync"
                draggable={false}
                onLoad={(event) => {
                  const img = event.currentTarget;
                  setNatural({ w: img.naturalWidth, h: img.naturalHeight });
                }}
                className="block max-h-none max-w-none select-none"
                style={{
                  width: displayW || "auto",
                  height: displayH || "auto",
                  imageRendering: "auto",
                }}
              />
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
