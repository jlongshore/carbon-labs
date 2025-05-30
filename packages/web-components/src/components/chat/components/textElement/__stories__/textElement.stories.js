/**
 * @license
 *
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import '../textElement';
import { html } from 'lit';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Components/AI Components/Text',
  component: 'clabs-chat-text',
};

export const Default = {
  /**
   * Renders the template for Storybook
   *
   * @returns {TemplateResult<1>}
   */
  render: () => html` <clabs-chat-text content="Hello, how may I help you?">
  </clabs-chat-text>`,
};

const targetingElementsExample = [
  {
    text: 'This is a test to check targeted feedback responses in text, for exmaple a ',
    type: 'default',
    active: false,
    content: '',
  },
  {
    text: 'token',
    type: 'annotation',
    color: '#8a3ffc',
    content: 'https://en.wikipedia.org/wiki/President_of_the_United_States',
    active: false,
  },
  {
    text: ' or ',
    type: 'default',
    active: false,
    content: '',
  },
  {
    text: 'group of tokens',
    type: 'annotation',
    color: '#33b1ff',
    content: 'https://en.wikipedia.org/wiki/Assassination_of_Abraham_Lincoln',
    active: true,
  },
  {
    text: ' can be targeted.',
    type: 'default',
    active: false,
    content: '',
  },
  {
    text: ' We could also have entire sentences as well. ',
    type: 'default',
    active: false,
    content: '',
  },
  {
    text: 'This sentence contains GDPR violations Mr. John Smith.',
    type: 'annotation',
    color: '#007d79',
    content: 'https://en.wikipedia.org/wiki/American_Civil_War',
    active: false,
  },
  {
    text: 'Or this passage contains ',
    type: 'default',
    active: false,
    content: '',
  },
  {
    text: 'hate speech',
    type: 'annotation',
    color: '#ff7eb6',
    content: 'https://en.wikipedia.org/wiki/Union_(American_Civil_War',
    active: false,
  },
  {
    text: ' or ',
    type: 'default',
    active: false,
    content: '',
  },
  {
    text: 'Business guideline violations',
    type: 'annotation',
    color: '#fa4d56',
    content: 'https://en.wikipedia.org/wiki/Confederate_States_of_America',
    active: false,
  },
  {
    text: ' or ',
    type: 'default',
    active: false,
    content: '',
  },
  {
    text: ' factually incorrect information',
    type: 'annotation',
    color: '#08bdba',
    content: 'https://en.wikipedia.org/wiki/Abolitionism_in_the_United_States',
    active: false,
  },
];

const codeElementsExample = [
  {
    text: 'To see the Chat, use ',
    type: 'default',
    active: false,
    content: '',
  },
  {
    text: '<Chat loading={true}/>',
    type: 'code',
    active: false,
    content: '',
  },
  {
    text: ', then place:',
    type: 'default',
    active: false,
    content: '',
  },
  {
    text: 'user-name',
    type: 'code',
    active: false,
    content: '',
  },
  {
    text: 'agent-name',
    type: 'code',
    active: false,
    content: '',
  },
  {
    text: 'on-submit={newMessage}',
    type: 'code',
    active: false,
    content: '',
  },
  {
    text: '.\nMake sure to place inside:',
    type: 'default',
    active: false,
    content: '',
  },
  {
    text: '<Messages> <Message> Place objects here </Message> </Messages>',
    type: 'code',
    active: false,
    content: '',
  },
  {
    text: '\n Then any imported objects can be placed within such as:\n',
    type: 'default',
    active: false,
    content: '',
  },
  {
    text: '<Code></Code>  <TextElement></TextElement>',
    type: 'code',
    active: false,
    content: '',
  },
];
const subElementsExample = [
  {
    text: 'Abraham Lincoln was an American lawyer, politician, and statesman who served as the 16th ',
    type: 'default',
    active: false,
    content: '',
  },
  {
    text: 'president of the United States',
    type: 'annotation',
    color: '#08bdba',
    content: 'https://en.wikipedia.org/wiki/President_of_the_United_States',
    active: false,
  },
  {
    text: ' from 1861 until his ',
    type: 'default',
    active: false,
    content: '',
  },
  {
    text: 'assassination',
    type: 'annotation',
    color: '#6fdc8c',
    content: 'https://en.wikipedia.org/wiki/Assassination_of_Abraham_Lincoln',
    active: true,
  },
  {
    text: ' in 1865.',
    type: 'default',
    active: false,
    content: '',
  },
  {
    text: ' Lincoln led the United States through the ',
    type: 'default',
    active: false,
    content: '',
  },
  {
    text: 'American Civil War',
    type: 'annotation',
    color: '#d2a106',
    content: 'https://en.wikipedia.org/wiki/American_Civil_War',
    active: false,
  },
  {
    text: ', defending the nation as a constitutional ',
    type: 'default',
    active: false,
    content: '',
  },
  {
    text: 'union',
    type: 'annotation',
    color: '#d4bbff',
    content: 'https://en.wikipedia.org/wiki/Union_(American_Civil_War',
    active: false,
  },
  {
    text: '), defeating the insurgent ',
    type: 'default',
    active: false,
    content: '',
  },
  {
    text: 'Confederacy',
    type: 'annotation',
    color: '#33b1ff',
    content: 'https://en.wikipedia.org/wiki/Confederate_States_of_America',
    active: false,
  },
  {
    text: ', playing a major role in the ',
    type: 'default',
    active: false,
    content: '',
  },
  {
    text: 'abolition of slavery',
    type: 'annotation',
    color: '#ff7eb6',
    content: 'https://en.wikipedia.org/wiki/Abolitionism_in_the_United_States',
    active: false,
  },
];

export const Showcase = {
  /**
   * Renders the template for Storybook
   *
   * @returns {TemplateResult<1>}
   */
  render: () => html`
    <div style="max-width:50%">
    <h4>Simple</h4>
    <br />
    <clabs-chat-text
      content="hello, I'm Watson.
 how how may I help you?">
    </clabs-chat-text>
    <br />
    <h4>Capitalized</h4>
    <br />
    <clabs-chat-text
      content="hello, I'm Watson.
 how how may I help you?"
      capitalize="${true}">
    </clabs-chat-text>
    <br />
    <h4>Summarized sourcing</h4>
    <br />
    <clabs-chat-text
      enable-summarization
      content="<strong>Galileo di Vincenzo Bonaiuti de' Galilei</strong> (15 February 1564 – 8 January 1642), commonly referred to as <strong>Galileo Galilei</strong> (<i>ɡælɪˈleɪoʊ ɡælɪˈleɪ GAL-il-AY-oh GAL-il-AY</i>) or simply <strong>Galileo</strong>, was an Italian [astronomer](https://en.wikipedia.org/wiki/Astronomer), [physicist](https://en.wikipedia.org/wiki/Physicist) and [engineer](https://en.wikipedia.org/wiki/Engineer), sometimes described as a [polymath](https://en.wikipedia.org/wiki/Polymath). He was born in the city of [Pisa](https://en.wikipedia.org/wiki/Pisa), then part of the [Duchy of Florence](https://en.wikipedia.org/wiki/Duchy_of_Florence). Galileo has been called the father of [observational astronomy](https://en.wikipedia.org/wiki/Observational_astronomy), modern-era classical physics, the [scientific method](https://en.wikipedia.org/wiki/Scientific_method), and [modern science](https://en.wikipedia.org/wiki/Modern_science).">
    </clabs-chat-text>
    <br />
    <h4>Annotations</h4>
    <br />
    <clabs-chat-text
      enable-annotations
      content="<strong>Abraham Lincoln</strong> was an American lawyer, politician, and statesman who served as the 16th [president of the United States](https://en.wikipedia.org/wiki/President_of_the_United_States) from 1861 until his [assassination](https://en.wikipedia.org/wiki/Assassination_of_Abraham_Lincoln) in 1865.
 Lincoln led the United States through the [American Civil War](https://en.wikipedia.org/wiki/American_Civil_War), defending the nation as a constitutional [union](https://en.wikipedia.org/wiki/Union_(American_Civil_War)), defeating the insurgent [Confederacy](https://en.wikipedia.org/wiki/Confederate_States_of_America), playing a major role in the [abolition of slavery](https://en.wikipedia.org/wiki/Abolitionism_in_the_United_States), expanding the power of the [federal government](https://en.wikipedia.org/wiki/Federal_government_of_the_United_States), and modernizing the [U.S. economy](https://en.wikipedia.org/wiki/Economy_of_the_United_States).
Lincoln was born into poverty in a [log cabin](https://en.wikipedia.org/wiki/Log_cabin) in [Kentucky](https://en.wikipedia.org/wiki/Kentucky) and was raised on the [frontier](https://en.wikipedia.org/wiki/American_frontier), mainly in [Indiana](https://en.wikipedia.org/wiki/Indiana)."></clabs-chat-text>
    <br />
    <h4>Multi link annotations</h4>
    <br />
    <clabs-chat-text
      content="Here is a single annotation: [log cabin](https://en.wikipedia.org/wiki/Log_cabin)

Here is an [annotation with under 5 links](https://en.wikipedia.org/wiki/President_of_the_United_States,https://en.wikipedia.org/wiki/Union_American_Civil_War,https://en.wikipedia.org/wiki/Illinois)

Here is an [annotation with over 5 links](https://en.wikipedia.org/wiki/President_of_the_United_States,https://en.wikipedia.org/wiki/Union_American_Civil_War,https://en.wikipedia.org/wiki/Illinois,https://en.wikipedia.org/wiki/21st_century,https://en.wikipedia.org/wiki/United_Nations,https://en.wikipedia.org/wiki/Sustainable_development,https://en.wikipedia.org/wiki/Climate_change)">
    </clabs-chat-text>
    <br />
    <h4>Code Pieces</h4>
    <br />
    <clabs-chat-text .textSubElements="${codeElementsExample}">
    </clabs-chat-text>
    <br />

     <h4>Highlighting with slotting</h4>
    <br />
    <clabs-chat-text
      enable-text-highlighting
      @on-text-annotation-click="${(e) => console.log(e)}"
      content="<strong>Abraham Lincoln</strong> was an American lawyer, politician, and statesman who served as the 16th [president of the United States](https://en.wikipedia.org/wiki/President_of_the_United_States) from 1861 until his [assassination](https://en.wikipedia.org/wiki/Assassination_of_Abraham_Lincoln) in 1865.
 Lincoln led the United States through the [American Civil War](https://en.wikipedia.org/wiki/American_Civil_War), defending the nation as a constitutional [union](https://en.wikipedia.org/wiki/Union_(American_Civil_War)), defeating the insurgent [Confederacy](https://en.wikipedia.org/wiki/Confederate_States_of_America), playing a major role in the [abolition of slavery](https://en.wikipedia.org/wiki/Abolitionism_in_the_United_States), expanding the power of the [federal government](https://en.wikipedia.org/wiki/Federal_government_of_the_United_States), and modernizing the [U.S. economy](https://en.wikipedia.org/wiki/Economy_of_the_United_States).
Lincoln was born into poverty in a [log cabin](https://en.wikipedia.org/wiki/Log_cabin) in [Kentucky](https://en.wikipedia.org/wiki/Kentucky) and was raised on the [frontier](https://en.wikipedia.org/wiki/American_frontier), mainly in [Indiana](https://en.wikipedia.org/wiki/Indiana).">
      <div slot="custom-highlight-component">
        <div style="padding:16px;color:#FF007F;font-size:28px;border:1px solid #FF007F;margin-top:8px;margin-bottom:8px;">
          Slotted div placed here
        </div>
      </div>
    </clabs-chat-text>
    <br />
    <br />

    <h4>Feedback targeting</h4>
    <br />
    <clabs-chat-text
      .textSubElements="${targetingElementsExample}"
      enable-complex-feedback
      @on-text-annotation-click="${(e) => console.log(e)}"">
      <div slot="custom-highlight-component">
        <clabs-chat-popup
          prompt-title="Custom title"
          text-area-placeholder="Custom placeholder"
          popup-title="Custom title"
          ?is-slotted
          orientation="top"
          .tag-list="${'["Factually incorrect","Offensive content","GDPR violation","BRCG violation"]'}"
          disclaimer="Place your own legal disclaimer here">
        </clabs-chat-popup>
      </div>
    </clabs-chat-text>
    <br />
    <br />
    <h4>Text with text-sub-elements JSON Object using defined colors</h4>
    <br />
    <p style="font-style:italic; font-size:14px;">
      JSON array containing: text (plain text), type (default or annotated),
      active (false by default), content (link url or inner-text to be
      returned), color (Background Color)
    </p>
    <br />
    <clabs-chat-text
      enable-text-highlighting
      .textSubElements="${subElementsExample}">
    </clabs-chat-text>
    <br />
    </div>
  `,
};
