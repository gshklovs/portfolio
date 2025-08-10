## Greg Shklovski — Startups, Robotics, and Robot Learning

I build practical robot learning systems and fast demos for startups. My work spans on‑device perception, imitation learning for manipulation, and human‑in‑the‑loop interfaces that make robots useful in the real world.

Links: [LinkedIn](https://www.linkedin.com/in/gshklovski/) · [GitHub](https://github.com/gshklovs) · [Devpost](https://devpost.com/gshklovs) · [Google Scholar](https://scholar.google.com/citations?user=qeECtykAAAAJ&hl=en&oi=ao)

---

### What I’m focused on

- **Startups + Robotics**: shipping prototypes that become customer‑ready systems.
- **Robot Learning Research**: early PhD–level work on imitation learning for object manipulation from human 3D point tracking — scaling robot intelligence from inexpensive human demonstrations with diffusion‑based policies.
- **Operating principles**: deliver for real users and close the research→production loop. Priorities: build what people love, deeply know the customer, instrument everything, iterate fast across perception/control/policy, craft beautiful demos. YC/PG mindset; move fast when safe.

---

### Highlights

- **Envision**: TPU‑accelerated on‑device hand tracking device + event‑based SDK; won UCI Engineering’s Dean’s Choice Award. Media and write‑up: [LinkedIn post](https://www.linkedin.com/posts/gshklovski_jarvis-in-real-life-after-building-activity-7306823889483898881-MhVU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-R0kABHhlRycg4McpViI8s-_41F9K_b8E).
- **Hungry Monkey**: YC + Supabase AI hackathon project ("Yelp for Holiday Hours"). Demo: [Loom video](https://www.loom.com/share/f62efe8bab9c429fb1eb6849637cc871?sid=6ab0374a-ebc0-4d21-9fb2-68f35fb66ee2), Repo: [GitHub](https://github.com/rovirmani/hungry-monkey).
- **Robot Learning**: pipelines for 3D human keypoints → action segments → imitation policies; experiments with diffusion‑based visual guidance for grasp and placement.

---

## Projects and Demos

### Envision — Gesture Interface Device + SDK

- **What it is**: First edge‑deployed instance (open‑source) of hand gesture recognition on a Coral TPU accelerator; event‑driven SDK exposes fine‑grained inputs (fingertip position, pinch strength) over BLE/USB.
- **Why it matters**: Low‑latency, privacy‑preserving gesture control; reduced demo app code by ~80% vs. baseline approaches.
- **Hardware iterations**: ESP32‑S3 + OV5640; Himax WiseEye2 AI MCU; Raspberry Pi 5 + Coral USB Accelerator.
- **Demos**: Whiteboard drawing/editing; HandCode for gesture‑driven coding.
- **Media**: Project site with videos — [yasper.me/envision](https://yasper.me/envision). Source for site assets — [github.com/gshklovs/envision_website](https://github.com/gshklovs/envision_website). Award recap — [LinkedIn post](https://www.linkedin.com/posts/gshklovski_jarvis-in-real-life-after-building-activity-7306823889483898881-MhVU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-R0kABHhlRycg4McpViI8s-_41F9K_b8E).
- **Publication**: “Envision: Gesture Interface Device,” eScholarship (SSOE Research Symposium Dean's Awards), 2025 — [link](https://escholarship.org/uc/item/9k5938wb).

### Hungry Monkey — YC x Supabase AI Hackathon

- **One‑liner**: Yelp for Holiday Hours; AI‑assisted discovery and recommendations.
- **Stack**: FastAPI (Python) backend, React + TypeScript frontend, Supabase DB, Clerk auth; deployed on Vercel.
- **Links**: Demo — [Loom](https://www.loom.com/share/f62efe8bab9c429fb1eb6849637cc871?sid=6ab0374a-ebc0-4d21-9fb2-68f35fb66ee2). Repo — [GitHub](https://github.com/rovirmani/hungry-monkey).

**Featured photo (YC demo):**

![YC demo — Hungry Monkey](workspace/portfolio/src/assets/IMG_3457.PNG)

Notes for site integration:

- Promote this image near the top of the Hungry Monkey section and optionally on the homepage as a featured banner.
- Consider a short caption: “Demoing Hungry Monkey at YC — rescuing your last‑minute holiday restaurant search.”

### Robot Learning — Imitation from Human 3D Points

- **Objective**: Teach robots object manipulation via demonstrations captured with multi‑view human 3D point/pose tracking.
- **Approach**:
  - Extract 3D keypoints → segment actions/states → learn goal‑conditioned policies.
  - Use Stable Diffusion / AnimateDiff for visual guidance and trajectory priors; learn control with Diffusion Policy.
  - Data engine: collection, synchronization, labeling, and evaluation pipelines for reproducible experiments; telemetry for iteration speed and safety gates.
  - Tooling/platforms: ROS 2, UR‑3e, PyTorch, CUDA/TensorRT on Jetson/Orin, Open3D/point clouds.
- **Status**: Active research; demos and write‑ups upon request.

---

## Experience (selected)

- **Startups, Robotics, and Research**: building and integrating real systems with a bias for shipping.
- **Undergraduate Researcher — CalPlug, Calit2 (UCI)**: trained and deployed adaptive intention recognition to enable a UR‑3e robot to assist with ambiguous manufacturing tasks; built data pipelines and baselines for intent/state changes.
- **Software Engineering Intern — Relativity Space**: ETL pipeline for the Factory Platform (Python, GraphQL); data reliability and schema evolution for manufacturing.
- **Software Engineering Intern — Summit Technology Laboratory**: two full‑stack apps (C#/.NET + Angular) including auth, database, file system, and calibration workflows.

---

## Publications / Writing

- **Envision: Gesture Interface Device** — Shklovski, De Jong, Dao, Liu. eScholarship, SSOE Research Symposium Dean's Awards (2025). [Read](https://escholarship.org/uc/item/9k5938wb). Summary: edge‑accelerated hand‑tracking device with event‑driven SDK that reduced demo app size by ~80%.
- **Other works (preprints/in‑progress)**: Scholar profile lists two works; add public links when available — [Google Scholar](https://scholar.google.com/citations?user=qeECtykAAAAJ&hl=en&oi=ao).

---

## Awards

- **Dean’s Choice Award**, UCI Engineering Senior Design Showcase — for Envision. Recap: [LinkedIn](https://www.linkedin.com/posts/gshklovski_jarvis-in-real-life-after-building-activity-7306823889483898881-MhVU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-R0kABHhlRycg4McpViI8s-_41F9K_b8E).

---

## Skills

- **Robot Learning**: Imitation Learning, Diffusion Policy, goal‑conditioned RL/IL, 3D pose/keypoints, action segmentation, dataset curation/annotation pipelines.
- **Perception & Edge ML**: PyTorch, CUDA, TensorRT, Jetson/Orin, OpenCV, MediaPipe, Open3D, point‑cloud registration, SAM2, DINO, Coral TPU deployment, embedded MCUs.
- **Software**: Python, C++, ROS 2 (rclpy/rclcpp), FastAPI, Docker, TypeScript/React, GraphQL, C#/.NET, Firebase, Supabase.
- **Systems**: Real‑time data/telemetry, ETL pipelines, on‑device streaming.

---

## Media to embed on the site

- Envision demo videos and poster sections from [yasper.me/envision](https://yasper.me/envision) (or mirrored from [envision_website repo](https://github.com/gshklovs/envision_website)).
- Hungry Monkey demo video: [Loom](https://www.loom.com/share/f62efe8bab9c429fb1eb6849637cc871?sid=6ab0374a-ebc0-4d21-9fb2-68f35fb66ee2).

Upcoming assets (placeholders; add to `workspace/portfolio/src/assets/`):

- `foundation_robot.jpg` — photo from Foundation work.
- `robot_learning_research.mp4` (or `.webm`) — short imitation learning/manipulation demo video.

---

## Contact

Best way to reach me is via [LinkedIn](https://www.linkedin.com/in/gshklovski/). Repos and demos on [GitHub](https://github.com/gshklovs) and [Devpost](https://devpost.com/gshklovs).
