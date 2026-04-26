export const CATEGORIES = {
  zywienie: {
    slug: 'zywienie',
    label: 'Żywienie kota',
    description: 'Karma, skład, żywienie kota - co podawać, czego unikać.',
  },
  zdrowie: {
    slug: 'zdrowie',
    label: 'Zdrowie i weterynaria',
    description: 'Objawy, wizyty u weta, profilaktyka i zdrowie kota.',
  },
  zachowanie: {
    slug: 'zachowanie',
    label: 'Zachowanie i wychowanie',
    description: 'Dlaczego kot tak robi i jak reagować - bez stresu.',
  },
  'nowy-kot': {
    slug: 'nowy-kot',
    label: 'Nowy kot w domu',
    description: 'Pierwsze kroki z nowym kotem - co kupić, jak go przyjąć.',
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
  description: 'Blog dla właścicieli kotów. Praktyczna wiedza o żywieniu, zdrowiu i zachowaniu kota.',
  author: 'Kochany Kłaczek',
  logo: '/favicon.svg',
} as const;
