# Original visual restore patch (Phase 04 baseline)

Restores every file touched by the failed art-direction patches to its **exact Phase 04 baseline bytes**: white `#FFFFFF` background, `#0A0A0A` text, `#F5F5F5` surfaces, Space Grotesk only, original circled "B" navbar mark. It is an overlay of baseline files, so it gives the same result whether your tree is clean, has the Libre Bodoni patch, has the modern-tech patch, or both.

## Files restored (17, overwritten with the baseline versions)
src/app/globals.css, src/app/layout.tsx,
src/components/sections/{About,Contact,Experience,Hero,Progress,Projects,Services,Skills,Testimonials}Section.tsx,
src/components/sections/{Footer,MarqueeStrip,Navbar}.tsx,
src/components/ui/{CopyEmailButton,GrowthExplorer,SectionLabel}.tsx

## Files requiring manual deletion (a zip cannot delete; 4 leftovers from the Libre Bodoni patch)
```
rm -f src/app/fonts/libre-bodoni-latin-wght-normal.woff2 \
      src/app/fonts/libre-bodoni-latin-wght-italic.woff2 \
      src/app/fonts/OFL-LibreBodoni.txt \
      src/components/ui/Emblem.tsx
```
They are no longer referenced after the restore, so leaving them is harmless but dead weight. If you never applied that patch they don't exist.

## Dependencies
None. No `package.json` or lockfile.

## Applying
1. At the project root: `unzip -o portfolio-bryan-original-visual-restore-patch.zip` (then delete `MANIFEST.md` from the root if you don't want it in the repo).
2. Run the `rm` above.
3. `rm -rf .next && npm run build && npm run start`, and hard-refresh the browser.
4. Check: `git status` should now show no differences from your Phase 04 commit except possibly MANIFEST.md.
Fully safest alternative: re-extract the original Phase 04 ZIP into a fresh folder.
