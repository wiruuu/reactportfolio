import {clsx} from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
}

export function getWordCount(text) {
  if (!text) return 0;
  return text
    .replace(/[#_*`>~\-]/g, "") 
    .trim()
    .split(/\s+/).length;
}