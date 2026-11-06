# Doctor film v4

This revision replaces the visibly stepped motion in v3. It uses the same five unique photographs, each appearing once, in this order:

1. `public/assets/vet-cat-portrait.jpg` — Dr. Hakam with a cat.
2. `/Users/yousef/Downloads/pexels-nicolas-bertapelle-3459648-13085581.jpg` — dog at a veterinary station.
3. `public/assets/vet-dog-care.jpg` — Dr. Hakam with a dog.
4. `/Users/yousef/Downloads/pexels-tahir-33998172.jpg` — kitten in veterinary care.
5. `/Users/yousef/Downloads/pexels-sueda-guzeldere-774990922-28644464.jpg` — puppy in veterinary care.

`public/assets/vet-dog-visit.jpg` is excluded. The hero film and poster are untouched.

## Motion and export

Each photo is cropped and scaled once to a 900 × 1125 working image. Every output frame is then sampled with an independent fractional-pixel affine transform and bilinear interpolation. Translation and a slight zoom change linearly through each scene, with an 18-frame (0.3-second) eased dissolve between scenes. This avoids the integer crop positions that caused apparent holds and jumps in the earlier film. There is no repeated photo block at the loop boundary.

The final `public/assets/doctor-film-v4.mp4` is **13.8 seconds, 800 × 1000, 60 fps, H.264, yuv420p, 2,445,204 bytes**, with the MP4 index at the front for progressive playback. `public/assets/doctor-film-v4-poster.jpg` comes from the opening scene at 0.5 seconds. The film is **silent with no audio stream** for launch compliance; no music asset is included.

## Checks

- `ffprobe` confirmed one H.264 stream, 828 frames at 60 fps, 800 × 1000, yuv420p, 13.8 seconds, and no audio stream.
- Frame-to-frame analysis of the decoded MP4 found **zero identical adjacent frame pairs** in each of the five scenes. Minimum mean absolute pixel differences per scene were 0.529, 0.350, 0.952, 0.565, and 0.089 (8-bit RGB scale).
- A contact sheet of frames at 1.3, 4.0, 6.8, 9.4, and 12.2 seconds was visually inspected; it confirms all five subjects in the specified order and in frame.
- The hero media SHA-256 values remained unchanged: `hero-clinic.mp4` = `9b2c3bf662daae14cd132d0f08e24c46a5dc4747bcd51a34777f6afae73c6e22`; `hero-clinic-poster.jpg` = `a5fb5a58c5e8c4e4500971d06302207bcad22d974f85084e7630fe2881d82cf2`.

The application integration and browser autoplay check are owned by the parent agent.
