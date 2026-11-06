# Homepage media sources — 2026-11-06

These are the stock scenes in the opening video. The people and animals shown are not represented as VetStation staff or patients. The hero file is silent and unchanged by the later multilingual and mobile-service revision. The current doctor film is also silent; see [doctor-film-v4.md](doctor-film-v4.md).

## Delivered files

| File | Specification | Source |
| --- | --- | --- |
| `public/assets/hero-clinic.mp4` | 12.25 s, 1280×720 (16:9), 24 fps, H.264 MP4, no audio, 3,404,312 bytes | Edited from the cat and dog Pexels clips below |
| `public/assets/hero-clinic-poster.jpg` | 1280×720 JPEG, frame at 2 s of `hero-clinic.mp4` | Derived from the cat clip below |

## Exact sources and licenses

1. **Cat clinic footage:** “Cat in the Veterinarian,” Gustavo Fring, Pexels. Source page: https://www.pexels.com/video/cat-in-the-veterinarian-6816882/ . Downloaded file: https://videos.pexels.com/video-files/6816882/6816882-uhd_3840_2160_30fps.mp4 . Source page describes a fluffy white cat being examined by a veterinarian indoors; 16:9, approximately 9 seconds.
2. **Dog clinic footage:** “A Dog Having a Check Up,” Gustavo Fring, Pexels. Source page: https://www.pexels.com/video/a-dog-having-a-check-up-6816874/ . Downloaded file: https://videos.pexels.com/video-files/6816874/6816874-uhd_3840_2160_30fps.mp4 . Source page describes a veterinarian examining a Yorkshire Terrier's ear in a clinic; 16:9, approximately 9 seconds.

Both Pexels videos are under the [Pexels License](https://www.pexels.com/legal-pages/license/), which permits free modification and commercial website use without required attribution. The license forbids implying that identifiable people or brands in stock imagery endorse VetStation. Keep the stock nature of these scenes clear in surrounding website copy.

## Processing and checks

- Trimmed each video source from 1.0 s for 6.3 s, scaled to 1280×720, converted to 24 fps, and joined cat → dog with a 0.35 s dissolve. Removed all source audio and placed the MP4 metadata at the beginning for progressive playback.
- Extracted the poster from the finished video at 2 s.
- Verified with `ffprobe`: hero has one H.264 video stream and **no audio stream**; 12.25 s and 3.40 MB. Visually inspected frames from both hero scenes and the poster.

SHA-256 checksums:

```text
9b2c3bf662daae14cd132d0f08e24c46a5dc4747bcd51a34777f6afae73c6e22  public/assets/hero-clinic.mp4
a5fb5a58c5e8c4e4500971d06302207bcad22d974f85084e7630fe2881d82cf2  public/assets/hero-clinic-poster.jpg
```
