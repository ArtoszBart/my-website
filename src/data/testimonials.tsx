import { Testimonial } from '@/types/data/testimonial';
import { FaLinkedin } from 'react-icons/fa6';
import { timelineItems } from './experience';

export const TESTIMONIAL_SOURCE = {
  LINKEDIN: { icon: <FaLinkedin aria-hidden='true' />, name: 'LinkedIn' },
};

export const TESTIMONIALS: Testimonial[] = [
  {
    author: 'Paweł Radziszewski',
    company: timelineItems.find((item) => item.id === 'holis'),
    source: TESTIMONIAL_SOURCE.LINKEDIN,
    url: 'https://www.linkedin.com/in/bartosz-art/details/recommendations/?detailScreenTabIndex=0',
    orginalLanguage: 'en',
    translationKey: 'pawel-holis',
  },
  {
    author: 'Krzysztof Banasik',
    company: timelineItems.find((item) => item.id === 'holis'),
    source: TESTIMONIAL_SOURCE.LINKEDIN,
    url: 'https://www.linkedin.com/in/bartosz-art/details/recommendations/?detailScreenTabIndex=0',
    orginalLanguage: 'en',
    translationKey: 'krzysztof-holis',
  },
  {
    author: 'Filip Leszek',
    company: timelineItems.find((item) => item.id === 'dream-ai'),
    source: TESTIMONIAL_SOURCE.LINKEDIN,
    url: 'https://www.linkedin.com/in/bartosz-art/details/recommendations/?detailScreenTabIndex=0',
    orginalLanguage: 'pl',
    translationKey: 'dreamai-filip',
  },
  {
    author: 'Michał Art',
    source: TESTIMONIAL_SOURCE.LINKEDIN,
    url: 'https://www.linkedin.com/in/bartosz-art/details/recommendations/?detailScreenTabIndex=0',
    orginalLanguage: 'en',
    translationKey: 'michal',
  },
  {
    author: 'Magdalena Bujnicka',
    company: timelineItems.find((item) => item.id === 'bujnicka-dent'),
    source: TESTIMONIAL_SOURCE.LINKEDIN,
    url: 'https://www.linkedin.com/in/bartosz-art/details/recommendations/?detailScreenTabIndex=0',
    orginalLanguage: 'pl',
    translationKey: 'magdalena-bujnickadent',
  },
  {
    author: 'Kacper Skałkowki',
    company: timelineItems.find((item) => item.id === 'skks'),
    source: TESTIMONIAL_SOURCE.LINKEDIN,
    url: 'https://www.linkedin.com/in/bartosz-art/details/recommendations/?detailScreenTabIndex=0',
    orginalLanguage: 'pl',
    translationKey: 'kacper-skks',
  },
];
