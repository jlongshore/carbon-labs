/**
 * Utility function to join classNames without needing an external package.
 *
 * @param {string[]} classes - Array of classes to join
 */
export const joinClasses = (classes: string[]): string => {
  return classes.filter((el) => !!el).join(' ');
};
