// src/lib/utils.js

/**
 * Concatenates class names, filtering out falsy values.
 * @param  {...any} classes - Class names to concatenate.
 * @returns {string} The concatenated class names.
 */
export const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };
  