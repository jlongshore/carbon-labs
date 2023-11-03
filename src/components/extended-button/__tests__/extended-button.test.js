/**
 * @license
 *
 * Copyright IBM Corp. 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, fixture, expect } from '@open-wc/testing';
import '../../../../dist/extended-button.js';

describe('c4ai-extended-button', function () {
  describe('Misc attributes', function () {
    it('should render with cds-button minimum attributes', async () => {
      const el = await fixture(
        html`<c4ai-extended-button> button </c4ai-extended-button>`
      );

      await expect(el).dom.to.equalSnapshot();
      await expect(el).shadowDom.to.be.accessible();
      expect(el.kind).to.equal('primary');
    });
  });
});
