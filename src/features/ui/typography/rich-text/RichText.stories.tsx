import { Story } from '@storybook/react';
import RichText, { RichTextProps } from './RichText';

export default {
  title: 'Typography/Rich text',
  component: RichText,
};

const Template: Story<RichTextProps> = (args) => <RichText {...args} />;

export const Default = Template.bind({});
Default.args = {
  html: ` <h1>H1 heading</h1>
  <h2>H2 heading</h2>
  <h3>H3 heading</h3>
  <div class="not-prose">
  <h3 class="text-2xl text-gray-700 font-bold leading-8">H3 Heading small</h3>
  </div>
  <h4>H4 heading</h4>
  <p>Rich text</p>
  <a href="">Link text</a>
  <p>Single return</p>
  <p>Double return</p>
  <p><strong>Bold</strong></p>
  <p><i>Italic</i></p>
  <ol>
    <li>Bullet list</li>
    <li>a</li>
    <li>b</li>
    <li>c</li>
    </ol>
    <p>And</p>
    <ul>
      <li>Bullet list</li>
      <li>a</li>
      <li>b</li>
      <li>c</li>
      </ul>`,
};
Default.storyName = 'Rich text';
