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
      'Kompleksowy system zarządzania gabinetem stomatologicznym ze szczególnym naciskiem na bezpieczeństwo i ochronę danych. Umożliwia rezerwację wizyt online, zarządzanie harmonogramami pracy, obsługę powiadomień oraz procesów administracyjnych. Rozwiązanie zostało wdrożone i wspiera codzienną pracę gabinetu.',
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
  {
    title: 'ModernCar',
    thumbnail: `${process.env.NEXT_PUBLIC_CDN_URL}/modern-car.webp`,
    blurThumbnail:
      'data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAABQBACdASogABIAPzmGuVOvKSWisAgB4CcJYwC90CKT+SMmEtNAUTxj7NKAAP6ig1XgQo/hN/UllTP7SNc0sTw+dw/LGTyJ39UY5y7BX42bBlg1XcDzQrp0biVw11Qugechyk6h4GXlzFluQFQoAA==',
    link: 'https://modern-car.bartart.dev/',
    repositoryLink: 'https://github.com/ArtoszBart/modern-car',
    snippet:
      'Komercyjna strona internetowa dla studia detailingu samochodowego specjalizującego się w pielęgnacji, zabezpieczaniu i personalizacji pojazdów. Projekt został zrealizowany w czystym HTML, CSS i JavaScript, z naciskiem na atrakcyjną prezentację usług, płynne animacje oraz pełną responsywność na urządzeniach mobilnych i desktopowych.',
    scope: [SCOPE.WEB],
    techstack: [TECH.HTML, TECH.CSS, TECH.JAVA_SCRIPT],
    date: new Date(Date.UTC(2021, 1, 1)),
    rating: 7,
  },
];
