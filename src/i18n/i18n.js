import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fa from './locales/fa.json'
import en from './locales/en.json'
import ar from './locales/ar.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            fa,
            en,
            ar
        },
        fallbackLng: 'fa',
        debug: process.env.NODE_ENV !== 'production',
        ns: ['translations'],
        defaultNS: 'translations',
        // keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ',',
        },
        react: {
            wait: true,
        },
    })
export default i18n;