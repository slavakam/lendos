import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ua from './ua.json';
import ru from './ru.json';

const DEFAULT_LANGUAGE = 'ru';

i18n
  .use(initReactI18next)
  .init({
    resources: { 
      ua: { translation: ua },
      ru: { translation: ru },
    },
    debug: false,
    lng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false, // react already safes from xss
    }
  });

export default i18n;
