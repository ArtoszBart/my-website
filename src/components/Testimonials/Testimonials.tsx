import { Locale } from '@/i18n/types';
import Carousel from '../Carousel';
import TestimonialCard from './TestimonialCard';
import { getTranslatedTestimonials } from './testimonialsUtils';

interface IProps {
  locale: Locale;
}

export default async function Testimonials({ locale }: IProps) {
  const translatedTestimonials = await getTranslatedTestimonials(locale);

  return (
    <Carousel name='testimonials'>
      {translatedTestimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.translationKey}
          testimonial={testimonial}
        />
      ))}
    </Carousel>
  );
}
