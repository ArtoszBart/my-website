import { Project, SCOPE, TECH } from '@/types/project';

export const PROJECTS: Project[] = [
  {
    title: 'Bujnicka-Dent',
    thumbnail: `${process.env.NEXT_PUBLIC_CDN_URL}/bujnicka-dent.webp`,
    blurThumbnail:
      'data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAAAwBACdASogABIAPzWCslOvKKQisAwB4CaJZQC7ABb+Dzak794ZVmvG79AA/RLjo+jKUIrCgLpfQPH3bxIiXc55tlOj0ReoM4NhWPlKQKfsxXWazFJenRc2Kf14vwBuCC0JOAsYDAAAAA==',
    link: 'https://bujnicka-dent.pl/',
    repositoryLink: 'https://github.com/ArtoszBart/bujnicka-dent',
    snippet:
      'System zarządzania gabinetem stomatologicznym składający się z aplikacji webowej, mobilnej, REST API i bazy danych. Obsługuje rezerwację wizyt, harmonogramy pracy, powiadomienia oraz procesy administracyjne. Projekt został wdrożony na Azure z naciskiem na bezpieczeństwo i ochronę danych.',
    scope: [SCOPE.WEB, SCOPE.MOBILE, SCOPE.SERVER, SCOPE.DB],
    techstack: [
      TECH.REACT,
      TECH.NODEJS,
      TECH.EXPRESS,
      TECH.MSSQL,
      TECH.EXPO,
      TECH.AZURE,
      TECH.JAVA_SCRIPT,
      TECH.HTML,
      TECH.SCSS,
    ],
    date: new Date(Date.UTC(2023, 8, 1)),
    rating: 10,
  },
];
