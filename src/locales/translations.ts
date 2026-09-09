import { en } from './en';
import { km } from './km';

export const translations = {
  en,
  km,
};

export type TranslationKey = keyof typeof translations.en;
