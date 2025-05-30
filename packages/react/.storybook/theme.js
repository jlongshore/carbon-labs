/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { create } from '@storybook/theming';

/**
 * @see https://storybook.js.org/docs/react/configure/theming
 */
export default create({
  base: 'light',

  // Typography
  fontBase: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",
  fontCode:
    "'IBM Plex Mono', Menlo, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace",

  brandTitle: `@carbon-labs React`,
  brandUrl:
    'https://github.com/carbon-design-system/carbon-labs/tree/main/packages/react',
});
