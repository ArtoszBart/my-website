import FramerMotionIcon from '@/assets/icons/framer-motion.svg';
import TypeScriptIcon from '@/assets/icons/typescript.svg';
import ZustandIcon from '@/assets/icons/zustand.svg';
import { SCOPE, TECH } from '@/types/project';
import { DiMsqlServer } from 'react-icons/di';
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from 'react-icons/fa6';
import {
  HiOutlineCircleStack,
  HiOutlineDevicePhoneMobile,
  HiOutlineGlobeAlt,
  HiOutlineNewspaper,
  HiOutlineServerStack,
} from 'react-icons/hi2';
import { RiNextjsFill } from 'react-icons/ri';
import {
  SiExpo,
  SiExpress,
  SiLottiefiles,
  SiStrapi,
  SiZod,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

type ScopeIconMeta = {
  icon: React.ReactNode;
  translationKey: 'web' | 'mobile' | 'cms' | 'server' | 'db';
};

type TechIconMeta = {
  icon: React.ReactNode;
  label: string;
  url: string;
};

export const SCOPE_ICONS: Record<SCOPE, ScopeIconMeta> = {
  [SCOPE.WEB]: { icon: <HiOutlineGlobeAlt />, translationKey: 'web' },
  [SCOPE.CMS]: { icon: <HiOutlineNewspaper />, translationKey: 'cms' },
  [SCOPE.SERVER]: { icon: <HiOutlineServerStack />, translationKey: 'server' },
  [SCOPE.DB]: { icon: <HiOutlineCircleStack />, translationKey: 'db' },
  [SCOPE.MOBILE]: {
    icon: <HiOutlineDevicePhoneMobile />,
    translationKey: 'mobile',
  },
};

export const TECH_ICONS: Record<TECH, TechIconMeta> = {
  [TECH.REACT]: {
    icon: <FaReact aria-label='React' />,
    label: 'React',
    url: 'https://react.dev',
  },
  [TECH.EXPRESS]: {
    icon: <SiExpress aria-label='Express' />,
    label: 'Express',
    url: 'https://expressjs.com',
  },
  [TECH.NODEJS]: {
    icon: <FaNodeJs aria-label='Node.js' />,
    label: 'Node.js',
    url: 'https://nodejs.org',
  },
  [TECH.MSSQL]: {
    icon: <DiMsqlServer aria-label='MSSQL' />,
    label: 'MSSQL',
    url: 'https://www.microsoft.com/sql-server',
  },
  [TECH.EXPO]: {
    icon: <SiExpo aria-label='Expo' />,
    label: 'Expo',
    url: 'https://expo.dev',
  },
  [TECH.JAVA_SCRIPT]: {
    icon: <FaJs aria-label='JavaScript' />,
    label: 'JavaScript',
    url: 'https://developer.mozilla.org/docs/Web/JavaScript',
  },
  [TECH.TYPE_SCRIPT]: {
    icon: <TypeScriptIcon aria-label='TypeScript' />,
    label: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
  },
  [TECH.AZURE]: {
    icon: <VscAzure aria-label='Azure' />,
    label: 'Azure',
    url: 'https://azure.microsoft.com',
  },
  [TECH.HTML]: {
    icon: <FaHtml5 aria-label='HTML' />,
    label: 'HTML',
    url: 'https://azure.microsoft.com',
  },
  [TECH.CSS]: {
    icon: <FaCss3 aria-label='CSS' />,
    label: 'CSS',
    url: 'https://developer.mozilla.org/docs/Web/CSS',
  },
  [TECH.SCSS]: {
    icon: <FaSass aria-label='SCSS' />,
    label: 'SCSS',
    url: 'https://sass-lang.com/',
  },
  [TECH.NEXTJS]: {
    icon: <RiNextjsFill aria-label='Next.js' />,
    label: 'Next.js',
    url: 'https://nextjs.org/',
  },
  [TECH.STRAPI]: {
    icon: <SiStrapi aria-label='Strapi' style={{ padding: '1px' }} />,
    label: 'Strapi',
    url: 'https://strapi.io/',
  },
  [TECH.ZUSTAND]: {
    icon: <ZustandIcon aria-label='Zustand' />,
    label: 'Zustand',
    url: 'https://zustand-demo.pmnd.rs/',
  },
  [TECH.ZOD]: {
    icon: <SiZod aria-label='Zod' />,
    label: 'Zod',
    url: 'https://zod.dev/',
  },
  [TECH.FRAMER_MOTION]: {
    icon: <FramerMotionIcon aria-label='Framer Motion' />,
    label: 'Framer Motion',
    url: 'https://motion.dev/',
  },
  [TECH.LOTTIE_FILES]: {
    icon: <SiLottiefiles aria-label='LottieFiles' style={{ padding: '1px' }} />,
    label: 'LottieFiles',
    url: 'https://lottiefiles.com/',
  },
};
