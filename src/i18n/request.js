// // src/i18n/request.js
// import { getRequestConfig } from 'next-intl/server';

// export const locales = ['en', 'de'];
// export const defaultLocale = 'en';

// export default getRequestConfig(async ({ locale }) => {
//   const selectedLocale = locales.includes(locale) ? locale : defaultLocale;
  
//   return {
//     locale: selectedLocale, 
//     messages: (await import(`../../messages/${selectedLocale}.json`)).default
//   };
// });

import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'de'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  // Validate locale
  if (!locales.includes(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});