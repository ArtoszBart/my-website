import { SCOPE, TECH } from '@/types/project';
import { DiMsqlServer } from 'react-icons/di';
import { FaHtml5, FaJs, FaNodeJs, FaReact, FaSass } from 'react-icons/fa6';
import {
  HiOutlineCircleStack,
  HiOutlineDevicePhoneMobile,
  HiOutlineGlobeAlt,
  HiOutlineNewspaper,
  HiOutlineServerStack,
} from 'react-icons/hi2';
import { SiExpo, SiExpress } from 'react-icons/si';
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
  [TECH.SCSS]: {
    icon: <FaSass aria-label='SCSS' />,
    label: 'SCSS',
    url: 'https://azure.microsoft.com',
  },
};
