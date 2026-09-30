import { SCOPE } from '@/enums/scope.enum';
import { ScopeMeta } from '@/types/data/scopes';
import {
  HiOutlineCircleStack,
  HiOutlineDevicePhoneMobile,
  HiOutlineGlobeAlt,
  HiOutlineNewspaper,
  HiOutlineServerStack,
} from 'react-icons/hi2';

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
