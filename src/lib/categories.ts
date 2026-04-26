export const CATEGORIES = {
  zywienie: {
    slug: 'zywienie',
    label: 'Żywienie',
    description: 'Karma, skład, żywienie - co podawać, czego unikać.',
  },
  zdrowie: {
    slug: 'zdrowie',
    label: 'Zdrowie i weterynaria',
    description: 'Objawy, wizyty u weta, profilaktyka i zdrowie pupila.',
  },
  zachowanie: {
    slug: 'zachowanie',
    label: 'Zachowanie i wychowanie',
    description: 'Dlaczego tak robi i jak reagować - bez stresu.',
  },
  'nowy-pupil': {
    slug: 'nowy-pupil',
    label: 'Nowy pupil w domu',
    description: 'Pierwsze kroki z nowym pupilem - co kupić, jak go przyjąć.',
  },
  akcesoria: {
    slug: 'akcesoria',
    label: 'Akcesoria i produkty',
    description: 'Żwirek, kuweta, drapak, transporter - jak wybrać dobrze.',
  },
} as const;

export type CategorySlug = keyof typeof CATEGORIES;

export const SITE = {
  name: 'Kochany Kłaczek',
  url: 'https://kochanyklaczek.pl',
  description: 'Blog dla właścicieli psów i kotów. Praktyczna wiedza o żywieniu, zdrowiu i zachowaniu pupila.',
  author: 'Kochany Kłaczek',
  logo: '/favicon.svg',
} as const;
