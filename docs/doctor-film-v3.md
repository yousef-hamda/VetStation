# Doctor film v3

The “Meet Dr. Hakam” film is a 13.58-second, 800 × 1000, 24 fps H.264 MP4 with a JPEG poster. It uses five distinct still photographs, each appearing once, in this interleaved order:

1. `public/assets/vet-cat-portrait.jpg` — Dr. Hakam with cat.
2. `/Users/yousef/Downloads/pexels-nicolas-bertapelle-3459648-13085581.jpg` — dog at a veterinary station.
3. `public/assets/vet-dog-care.jpg` — Dr. Hakam with dog.
4. `/Users/yousef/Downloads/pexels-tahir-33998172.jpg` — kitten in veterinary care.
5. `/Users/yousef/Downloads/pexels-sueda-guzeldere-774990922-28644464.jpg` — puppy in veterinary care.

`public/assets/vet-dog-visit.jpg` is excluded. Every still has a subtle linear pan and a 0.35-second dissolve to the next. The output is `yuv420p`, limited-range, with MP4 metadata at the start for progressive playback. The poster is from the opening photograph.

## Launch audio decision

The final MP4 is **silent and has no audio stream**. The soundtrack was omitted following the project's legal review of Israeli veterinary advertising rules. No music asset is shipped for this film. Any site controls or copy referring to music should be removed by the integrating agent.

## Verification

- `ffprobe` confirmed 13.583 seconds, one H.264 video stream at 800 × 1000, `yuv420p`, and **no audio stream**.
- Frames near 1.3, 3.9, 6.6, 9.3, and 12.0 seconds were visually inspected and show the five unique photographs in the listed order with the subjects in frame.
- The hero media remained untouched. Its SHA-256 values match the pre-edit record in `docs/media-sources-revision.md`:
  - `hero-clinic.mp4`: `9b2c3bf662daae14cd132d0f08e24c46a5dc4747bcd51a34777f6afae73c6e22`
  - `hero-clinic-poster.jpg`: `a5fb5a58c5e8c4e4500971d06302207bcad22d974f85084e7630fe2881d82cf2`
