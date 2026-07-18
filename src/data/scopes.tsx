import { SCOPE } from '@/enums/scope.enum';
import {
  HiOutlineCircleStack,
  HiOutlineDevicePhoneMobile,
  HiOutlineGlobeAlt,
  HiOutlineNewspaper,
  HiOutlineServerStack,
} from 'react-icons/hi2';

type ScopeMeta = {
  icon: React.ReactNode;
  translationKey: 'web' | 'mobile' | 'cms' | 'server' | 'db';
};

export const SCOPES: Record<SCOPE, ScopeMeta> = {
  [SCOPE.WEB]: { icon: <HiOutlineGlobeAlt />, translationKey: SCOPE.WEB },
  [SCOPE.CMS]: { icon: <HiOutlineNewspaper />, translationKey: SCOPE.CMS },
  [SCOPE.SERVER]: {
    icon: <HiOutlineServerStack />,
    translationKey: SCOPE.SERVER,
  },
  [SCOPE.DB]: { icon: <HiOutlineCircleStack />, translationKey: SCOPE.DB },
  [SCOPE.MOBILE]: {
    icon: <HiOutlineDevicePhoneMobile />,
    translationKey: SCOPE.MOBILE,
  },
};
