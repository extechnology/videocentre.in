



export type Category = "weddings" | "travel" | "portraits";

export interface Gallery {
  id:number;
  title: string;
  description: string;
  thumbnail: string;
  category: Category;
  gallery: string[];
}

export const galleries: Gallery[] = [
  {
    id: 1,
    title: "Title One",
    description: "Description One",
    thumbnail:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80&auto=format&fit=crop",
    category: "weddings",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470905906913-64f21ea6d0e2?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=900&q=80&auto=format&fit=crop",
    ],
  },
  {
    id: 2,
    title: "Title Two",
    description: "Description Two",
    thumbnail:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80&auto=format&fit=crop",
    category: "travel",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470905906913-64f21ea6d0e2?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=900&q=80&auto=format&fit=crop",
    ],
  },
  {
    id: 3,
    title: "Title Three",
    description: "Description Three",
    thumbnail:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=80&auto=format&fit=crop",
    category: "portraits",
    gallery: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=900&q=80&auto=format&fit=crop",
    ],
  },
];


// export const galleries: Record<Category, string[]> = {
//   weddings: [
//     "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1470905906913-64f21ea6d0e2?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=900&q=80&auto=format&fit=crop",
//   ],
//   travel: [
//     "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=900&q=80&auto=format&fit=crop",
//   ],
//   portraits: [
//     "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=900&q=80&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=900&q=80&auto=format&fit=crop",
//   ],
// };


