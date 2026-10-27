import { TESTIMONIALS } from '@/data/testimonials';
import { Locale } from '@/i18n/types';
import { getTranslations } from 'next-intl/server';

export const getTranslatedTestimonials = async (locale: Locale) => {
  const t = await getTranslations({
    locale,
    namespace: 'ServicesPage.testimonials.content',
  });

  return Promise.all(
    TESTIMONIALS.map(async (testimonial) => {
      const { translationKey, orginalLanguage } = testimonial;

      const content = t.raw(`${translationKey}.content`);
      const position = t(`${translationKey}.position`);

      const originalContent =
        locale !== orginalLanguage
          ? (await import(`@/../messages/${orginalLanguage}.json`)).default
              .ServicesPage.testimonials.content[translationKey].content
          : undefined;

      return {
        ...testimonial,
        content,
        position,
        originalContent,
      };
    }),
  );
};
