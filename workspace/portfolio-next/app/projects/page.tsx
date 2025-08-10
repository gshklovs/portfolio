import Projects from "@/components/Projects";

export const metadata = {
  title: "Projects – Greg Shklovski",
  description: "Selected projects and demos by Greg Shklovski",
  openGraph: {
    title: "Projects – Greg Shklovski",
    description: "Selected projects and demos by Greg Shklovski",
    type: "website",
    images: [
      {
        url: "/img/IMG_3457-1200.jpg",
        width: 1200,
        height: 630,
        alt: "Projects by Greg Shklovski",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects – Greg Shklovski",
    description: "Selected projects and demos by Greg Shklovski",
    images: ["/img/IMG_3457-1200.jpg"],
  },
};

export const revalidate = 3600;

export default function Page() {
  return <Projects />;
}
