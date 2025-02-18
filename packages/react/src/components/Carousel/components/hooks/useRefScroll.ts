import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

/**
 * A hook to add a scroll listener to a ref, and debounce a callback
 *
 * @param {RefObject<HTMLElement>} element - The ref of the scrollable content
 * @param {(e: Event) => void} handleScroll - callback function called when scrolling is complete
 * @param {number} throttle - Optional parameter to modify the debounce time. Default is 1000 ms.
 */
const useRefScroll = (
  element: RefObject<HTMLElement>,
  handleScroll: (e: Event) => void,
  throttle = 1000
) => {
  const scrollRef = useRef<NodeJS.Timeout>();
  const [isScrolling, setIsScrolling] = useState(false);
  const internalScrollHandler = useCallback(
    (e: Event) => {
      setIsScrolling(true);
      clearTimeout(scrollRef.current);
      if (element.current) {
        scrollRef.current = setTimeout(
          () =>
            requestAnimationFrame(() => {
              handleScroll(e);
              setIsScrolling(false);
            }),
          throttle
        );
      }
    },
    [element, handleScroll, throttle]
  );

  useEffect(() => {
    const currentElement = element.current;
    if (currentElement) {
      currentElement.addEventListener('scroll', internalScrollHandler);
    }
    return () => {
      currentElement?.removeEventListener('scroll', internalScrollHandler);
    };
  }, [element, internalScrollHandler]);
  return { isScrolling };
};

export default useRefScroll;
