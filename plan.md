## Implementation Plan — Integrate Outline into Site

This plan maps the content in `Outline.MD` into the current React + TypeScript + Tailwind site and lists the code changes to make. The goal is to emphasize Startups, Robotics, and Robot Learning, highlight Envision (award + publication), and showcase Hungry Monkey with media.

### 0) Current layout recap

- Components: `Navbar`, `Hero`, `Projects`, `Skills`, `Experience`, `Footer` (rendered in `App.tsx`).
- Content source: `src/content/profile.ts` drives most sections.

### 1) Data model updates (in `src/content/profile.ts`)

Add types and content holders so we can render new sections without hardcoding:

- Add types: `Publication`, `Award`, `MediaAsset`.
- Extend exported `profile` with: `publications: Publication[]`, `awards: Award[]`, `media: MediaAsset[]`.
- Update `skills`, `projects`, and `experience` to reflect Outline items.

Type sketches:

```ts
export type Publication = {
  title: string;
  venue?: string;
  year?: string;
  authors?: string;
  link?: string;
  description?: string;
};

export type Award = {
  title: string;
  org?: string;
  year?: string;
  link?: string;
  description?: string;
};

export type MediaAsset = {
  title: string;
  kind: "image" | "video";
  src: string;
  caption?: string;
  link?: string;
};
```

Populate from `Outline.MD`:

- Summary/headline: replace with the new opener emphasizing startups + robot learning.
- Projects: include Envision (site link), Hungry Monkey (repo + Loom link), HandCode, Gesture Canvas, git.ar.
- Experience: CalPlug (Undergraduate Researcher), Relativity Space (SWE Intern), Summit Technology Laboratory (SWE Intern). Do not emphasize “Forward Deployed Engineer”.
- Publications: Envision eScholarship entry.
- Awards: Dean’s Choice Award (UCI Engineering Senior Design Showcase) with LinkedIn post link.
- Media: Hungry Monkey YC photo at `workspace/portfolio/src/assets/IMG_3457.PNG`; placeholders for `foundation_robot.jpg` and `robot_learning_research.mp4`.
- Skills: Upgrade to include PyTorch, CUDA/TensorRT, ROS 2, Open3D, point‑clouds, SAM2/DINO, Jetson/Orin.

### 2) New sections/components

- `components/Publications.tsx`: Render list with title → venue/year and link.
- `components/Awards.tsx`: Small card list of awards with year and link.
- `components/Media.tsx` (optional but recommended): Simple responsive gallery supporting images and inline videos.

Rendering details:

- Follow existing section styling (`section-title`, badges, borders) and `framer-motion` animations for consistency.

### 3) Navigation and page composition

- Update `Navbar.tsx`: add anchors for `#projects`, `#skills`, `#experience`, plus new `#publications` and `#awards` (and `#media` if added).
- Update `App.tsx` to render in this order:
  1. `Hero`
  2. `Projects` (rename subtitle to “Selected projects and demos”)
  3. `Skills`
  4. `Experience`
  5. `Publications`
  6. `Awards`
  7. `Media` (optional)
  8. Contact section (as is)

### 4) Content migration specifics

- `Hero`: set `profile.headline` to something like “Startups · Robotics · Robot Learning”. Use `profile.summary` from `Outline.MD` as the paragraph.
- `Projects` entries:
  - Envision — link `https://yasper.me/envision`.
  - Hungry Monkey — keep `Repo` link; add Loom demo link in description.
  - HandCode, Gesture Canvas, git.ar — keep existing Devpost links for now.
- `Experience`: replace placeholder role with three real roles from Outline.
- `Publications`: add eScholarship Envision citation and link `https://escholarship.org/uc/item/9k5938wb`.
- `Awards`: add Dean’s Choice Award with LinkedIn recap link.
- `Media`: include YC demo photo `src/assets/IMG_3457.PNG`; keep placeholders for upcoming media.

### 5) Copy updates

- Replace “Selected hackathon and personal work” subtitle in `Projects.tsx` with “Selected projects and demos”.
- Adjust `Contact` copy to emphasize collaboration with embodied AI startups and research groups.

### 6) Asset handling

- Ensure `workspace/portfolio/src/assets/IMG_3457.PNG` is committed.
- Add placeholders for `foundation_robot.jpg` and `robot_learning_research.mp4` in the same folder; wire them in `profile.media` but conditionally render only when files exist.

### 7) QA checklist

- Run local dev: `npm run dev` and visually verify sections.
- Check external links: LinkedIn post, eScholarship, Loom, GitHub repo.
- Responsive checks at 360px, 768px, 1280px.
- Lighthouse pass (basic): ensure images have alt text and external links have `rel="noreferrer"` where applicable.

### 8) Stretch enhancements (optional)

- Add a small “Highlights” ribbon under `Hero` with award and Envision publication.
- Add badges for key skills (PyTorch, ROS 2, CUDA) near `Hero` for quick scanning.
- Add a simple `useSectionInView` hook to highlight active nav item while scrolling (progressive enhancement).

### 9) Out-of-scope for now

- SEO/meta tags automation.
- CMS/data layer; `profile.ts` remains the single source of truth.

### 10) Rollout

1. Implement types + content in `profile.ts`.
2. Create `Publications.tsx`, `Awards.tsx`, and optional `Media.tsx`.
3. Wire sections in `App.tsx` and nav anchors in `Navbar.tsx`.
4. Update copy in `Projects.tsx` and contact text.
5. Verify build: `npm run build` and `npm run preview`.
