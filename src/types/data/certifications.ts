import { TECHNOLOGY } from '@/enums/technology.enum';

export type Certification = {
  name: string;
  source: CertificationSource;
  serialNo: string;
  date: Date;
  url: string;
  techstack: TECHNOLOGY[];
};

type CertificationSource = {
  icon: React.ReactNode;
  name: string;
};
