/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import { usePrefix } from '@carbon-labs/utilities/es/index.js';

/** Child UI component for use within a Carousel */

interface CarouselElementProps {
  children: React.ReactNode;
}

const CarouselElement = (props: CarouselElementProps) => {
  const { children } = props;
  const prefix = usePrefix();
  return <div className={`${prefix}--carousel__element`}>{children}</div>;
};

CarouselElement.displayName = 'CarouselElement';

export { CarouselElement };
