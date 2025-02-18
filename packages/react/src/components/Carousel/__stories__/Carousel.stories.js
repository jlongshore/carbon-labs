/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef, useState } from 'react';
import mdx from './Carousel.mdx';
import { Carousel } from '../components/Carousel';
import { CarouselElement } from '../components/CarouselElement';
import './storybook.scss';
import '../components/carousel.scss';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    docs: {
      page: mdx,
    },
    layout: 'centered',
  },
};

/**
 * Story for HeaderPanel
 * @param {object} args Storybook args that control component props
 * @returns {React.ReactElement} The JSX for the story
 */
export const Default = (args) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const carouselRef = useRef(null);
  /**
   * @param {number} index - value returned is the current index of the Carousel.
   * @param {number} lastIndex - value returned is the last item's index in the Carousel.
   * @param {number} total - value returned is the total number of items in the Carousel.
   */
  const handleExampleScroll = (index, lastIndex, total) => {
    setCurrentIndex(index);
    setLastIndex(lastIndex);
    setTotalElements(total);
  };
  return (
    <>
      <Carousel
        {...args}
        onScroll={handleExampleScroll}
        ref={carouselRef}
        className="exampleStoryCarousel">
        <CarouselElement>
          <div className="exampleCarouselSlide">
            <h2>Hello</h2>
          </div>
        </CarouselElement>
        <CarouselElement>
          <div className="exampleCarouselSlide">
            <h2>World</h2>
          </div>
        </CarouselElement>
        <CarouselElement>
          <div className="exampleCarouselSlide">
            <h2>Example</h2>
          </div>
        </CarouselElement>
      </Carousel>
      {/* The controls for the Carousel are exposed for the developer to implement as the design requires. */}
      <div className="exampleControls">
        <h3>Example controls:</h3>
        <div>
          Current slide index: {currentIndex}, last slide index: {lastIndex}{' '}
          Total: {totalElements}
        </div>
        <button
          type="button"
          disabled={currentIndex === 0}
          onClick={() => carouselRef.current?.scrollPrev()}>
          Back
        </button>
        <button
          type="button"
          disabled={currentIndex === lastIndex}
          onClick={() => carouselRef.current?.scrollNext()}>
          Next
        </button>
      </div>
    </>
  );
};
Default.parameters = {
  // controls: { disable: true },
  actions: { disable: true },
};

Default.argTypes = {
  ariaLabel: {
    control: 'text',
    description: 'Aria label passed to the scrolling carousel element.',
  },
  children: {
    control: { type: null },
    description: 'CarouselElement components',
  },
  className: {
    control: { type: null },
    description:
      'CSS class name to be applied to the outer most html element in the Carousel.',
  },
  onScroll: {
    control: { type: null },
    description:
      'A callback function that, if passed in, is invoked when the Carousel movement is complete. 3 number values are passed back, index, lastIndex, and total.',
  },
  role: {
    control: 'text',
    description: 'Role passed to the scrolling carousel element.',
  },
};
