import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { type GalleryCategory, GalleryCollection } from "./GalleryCollection";

export const metadata: Metadata = {
  title: "Gallery | Maxwell Hospitality",
  description:
    "Explore moments from Maxwell Hospitality's patient celebrations, staff welfare programs, training sessions, and care-led experiences.",
};

const categories: GalleryCategory[] = [
  {
    id: "newborn-baby",
    title: "Newborn Baby",
    images: [
      {
        src: "/gallery/New%20born%20Baby/img1.jpeg",
        alt: "Newborn baby care moment — photo 1",
      },
      {
        src: "/gallery/New%20born%20Baby/img2.jpeg",
        alt: "Newborn baby care moment — photo 2",
      },
      {
        src: "/gallery/New%20born%20Baby/img3.jpeg",
        alt: "Newborn baby care moment — photo 3",
      },
    ],
  },
  {
    id: "patient-birthday-celebration",
    title: "Patient Birthday Celebration",
    images: [1, 2, 3, 4, 5, 6].map((number) => ({
      src: `/gallery/Patient%20birthday%20celebration/img${number}.jpeg`,
      alt: `Patient birthday celebration — photo ${number}`,
    })),
  },
  {
    id: "skill-enhancement-training",
    title: "Skill Enhancement Training",
    images: [1, 2, 3].map((number) => ({
      src: `/gallery/Skill%20enhancement%20training/img${number}.jpeg`,
      alt: `Skill enhancement training — photo ${number}`,
    })),
  },
  {
    id: "staff-welfare-activities",
    title: "Staff Welfare Activities",
    images: [1, 2, 3, 4, 5, 6, 7].map((number) => ({
      src: `/gallery/Staff%20welfare%20activities/img${number}.jpeg`,
      alt: `Staff welfare activity — photo ${number}`,
    })),
  },
];

export default function GalleryPage() {
  return (
    <main>
      <SiteHeader />
      <GalleryCollection categories={categories} />
    </main>
  );
}
