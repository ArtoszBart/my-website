import { Environment } from '@/enums/environment.enum';
import { PROJECT_TYPE } from '@/enums/projectType.enum';
import { SCOPE } from '@/enums/scope.enum';
import { TECHNOLOGY } from '@/enums/technology.enum';
import { Project } from '@/types/project';

export const PROJECTS = [
  {
    title: 'Bujnicka-Dent',
    thumbnail: `${process.env.NEXT_PUBLIC_CDN_URL}/bujnicka-dent.webp`,
    blurThumbnail:
      'data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAAAwBACdASogABIAPzWCslOvKKQisAwB4CaJZQC7ABb+Dzak794ZVmvG79AA/RLjo+jKUIrCgLpfQPH3bxIiXc55tlOj0ReoM4NhWPlKQKfsxXWazFJenRc2Kf14vwBuCC0JOAsYDAAAAA==',
    link: 'https://bujnicka-dent.pl/',
    repositoryLink: 'https://github.com/ArtoszBart/bujnicka-dent',
    translationKey: 'bujnickaDent',
    scope: [SCOPE.WEB, SCOPE.MOBILE, SCOPE.SERVER, SCOPE.DB],
    techstack: [
      TECHNOLOGY.REACT,
      TECHNOLOGY.EXPRESS,
      TECHNOLOGY.MSSQL,
      TECHNOLOGY.EXPO,
      TECHNOLOGY.AZURE,
      TECHNOLOGY.JAVA_SCRIPT,
      TECHNOLOGY.HTML,
      TECHNOLOGY.SCSS,
    ],
    environments: [Environment.NODEJS],
    kind: PROJECT_TYPE.COMMERCIAL,
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
    translationKey: 'modernCar',
    scope: [SCOPE.WEB],
    techstack: [TECHNOLOGY.HTML, TECHNOLOGY.CSS, TECHNOLOGY.JAVA_SCRIPT],
    environments: [],
    kind: PROJECT_TYPE.COMMERCIAL,
    date: new Date(Date.UTC(2021, 1, 1)),
    rating: 7,
  },
  {
    title: 'KAM',
    thumbnail: `${process.env.NEXT_PUBLIC_CDN_URL}/kamonline.webp`,
    blurThumbnail:
      'data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAADwBACdASogABIAPzWKuVOvKiWisBgMAeAmiWIAtOgR/Oa14L+UGmcFAlHWmvbjXUAA/hwd2DHTXa8AAlJB9D+etefuQaVaq56UfsGe3cAiZQcPcKgWtBf8o+nD3+ojTHtECA0gAAA=',
    link: 'https://kamonline.pl/',
    translationKey: 'kam',
    scope: [SCOPE.WEB, SCOPE.CMS],
    techstack: [
      TECHNOLOGY.NEXTJS,
      TECHNOLOGY.REACT,
      TECHNOLOGY.STRAPI,
      TECHNOLOGY.TYPE_SCRIPT,
      TECHNOLOGY.SCSS,
      TECHNOLOGY.ZUSTAND,
      TECHNOLOGY.ZOD,
      TECHNOLOGY.LOTTIE_FILES,
      TECHNOLOGY.FRAMER_MOTION,
    ],
    environments: [Environment.NODEJS],
    kind: PROJECT_TYPE.COMMERCIAL,
    date: new Date(Date.UTC(2025, 10, 1)),
    rating: 9,
  },
] as const satisfies readonly Project[];

export type TranslationKey = (typeof PROJECTS)[number]['translationKey'];
