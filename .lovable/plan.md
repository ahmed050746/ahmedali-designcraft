# Replace CSS Image Placeholders

## Scope
- Add clean, editable image URLs and descriptive alternative text to each portfolio project.
- Replace the shared project wireframes, mobile phone mockups, and home-page CSS dashboard illustration with standard responsive `<img>` elements.
- Preserve the existing containers, aspect ratios, rounded corners, borders, hover movement, and desktop/mobile layout behavior.
- Keep genuine interface elements such as color swatches, status dots, and controls unchanged because they are not image placeholders.

## Technical details
- Store project image metadata alongside each project so cards and case studies consistently use the correct image.
- Use fixed Unsplash image URLs with explicit crop dimensions for stable rendering.
- Apply `object-cover`, full-width/full-height sizing, explicit intrinsic dimensions, and lazy loading where appropriate.
- Verify the home page, work listing, project details, and mobile layout, then check current build diagnostics.
