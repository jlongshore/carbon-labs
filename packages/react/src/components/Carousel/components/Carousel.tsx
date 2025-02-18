/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

import { usePrefix } from '@carbon-labs/utilities/es/index.js';
import useRefScroll from './hooks/useRefScroll';
import { joinClasses } from './utils';

interface CarouselProps
  extends Omit<
    React.HTMLProps<HTMLDivElement>,
    'onScroll' | 'ariaLabel' | 'role'
  > {
  ariaLabel?: string;
  role?: string;
  children: ReactNode;
  className?: string;
  onScroll?: (index: number, lastIndex: number, total: number) => void;
}

const Carousel = forwardRef(
  (
    {
      children,
      ariaLabel = 'Carousel',
      role = 'region',
      onScroll,
      className = '',
      ...rest
    }: CarouselProps,
    ref
  ) => {
    const prefix = usePrefix();
    const scrollRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollCarousel = useCallback(
      (targetPos: number, behaviorOverride: ScrollBehavior = 'smooth') => {
        if (scrollRef.current && containerRef.current) {
          scrollRef.current.scrollBy({
            left: targetPos,
            behavior: behaviorOverride,
          });
        }
      },
      []
    );

    const handleScrollNext = useCallback(() => {
      if (scrollRef.current && containerRef.current) {
        scrollCarousel(containerRef.current.clientWidth);
      }
    }, [scrollCarousel]);

    const handleScrollPrev = useCallback(() => {
      if (scrollRef.current && containerRef.current) {
        scrollCarousel(containerRef.current.clientWidth * -1);
      }
    }, [scrollCarousel]);

    const handleScrollReset = useCallback(() => {
      if (scrollRef.current && containerRef.current) {
        scrollRef.current.scrollTo({
          left: 0,
          behavior: 'instant',
        });
      }
    }, []);

    const handleScrollComplete = useCallback(() => {
      if (
        scrollRef.current &&
        containerRef.current &&
        containerRef.current?.clientWidth !== 0
      ) {
        const position = Math.round(
          scrollRef.current?.scrollLeft / containerRef.current?.clientWidth
        );
        onScroll &&
          onScroll(
            position,
            scrollRef.current.childElementCount - 1,
            scrollRef.current.childElementCount
          );
      }
    }, [onScroll]);

    const { isScrolling } = useRefScroll(scrollRef, handleScrollComplete, 300);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      e.preventDefault();
      if (!isScrolling) {
        const { key } = e;
        switch (key) {
          case 'ArrowLeft':
            handleScrollPrev();
            break;
          case 'ArrowRight':
            handleScrollNext();
            break;
          default:
            break;
        }
        handleScrollComplete();
      }
    };

    useImperativeHandle(
      ref as React.RefObject<void>,
      () => ({
        scrollNext() {
          handleScrollNext();
        },
        scrollPrev() {
          handleScrollPrev();
        },
        resetScroll() {
          handleScrollReset();
        },
        initCarousel() {
          handleScrollComplete();
        },
      }),
      [
        handleScrollNext,
        handleScrollPrev,
        handleScrollReset,
        handleScrollComplete,
      ]
    );

    useEffect(() => {
      handleScrollComplete();
    }, [handleScrollComplete]);

    return (
      <div
        className={joinClasses([`${prefix}--carousel__container`, className])}
        ref={containerRef}>
        <div
          {...rest}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          ref={scrollRef}
          aria-label={ariaLabel}
          role={role}
          className={`${prefix}--carousel`}>
          {children}
        </div>
      </div>
    );
  }
);

Carousel.displayName = 'Carousel';

export { Carousel };
