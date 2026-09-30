import { TIMELINE_CATEGORY } from '@/data/experience';
import { TECHNOLOGY } from '@/enums/technology.enum';

export type TimelineEntry = {
  id: string;
  title: string;
  companyName: string;
  link?: string;
  startDate: Date;
  endDate?: Date;
  category: TIMELINE_CATEGORY;
  techstack: TECHNOLOGY[];
};
