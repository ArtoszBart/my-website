import { ENVIROMENT } from '@/enums/environment.enum';
import { PROJECT_TYPE } from '@/enums/projectType.enum';
import { SCOPE } from '@/enums/scope.enum';
import { TECHNOLOGY } from '@/enums/technology.enum';

export type Project = {
  thumbnail: string;
  blurThumbnail: string;
  title: string;
  translationKey: string;
  scope: SCOPE[];
  techstack: TECHNOLOGY[];
  environments: ENVIROMENT[];
  kind: PROJECT_TYPE;
  link?: string;
  repositoryLink?: string;
  date: Date;
  rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  action?: 'install-modal';
};
