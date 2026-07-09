export type Category = "weddings" | "travel" | "portraits";

export const categories: {
  id: Category;
  title: string;
  subtitle: string;
  cover: string;
}[] = [
  {
    id: "weddings",
    title: "Weddings",
    subtitle: "Timeless love stories",
    cover:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "travel",
    title: "Travel",
    subtitle: "Wandering the wild",
    cover:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "portraits",
    title: "Portraits",
    subtitle: "Faces and moments",
    cover:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80&auto=format&fit=crop",
  },
];
