import { ENVIROMENT } from '@/enums/environment.enum';
import { PLATFORM } from '@/enums/techPlatform.enum';
import { TECH_TYPE } from '@/enums/techType.enum';

export type TechMeta = {
  icon: React.ReactNode;
  label: string;
  url: string;
  platforms: PLATFORM[];
  environments: ENVIROMENT[];
  types: TECH_TYPE[];
  experience: 1 | 2 | 3 | 4 | 5;
};
