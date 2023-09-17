import { Story } from '@storybook/react';
import ThemeProvider, { ThemeProviderProps } from './ThemeProvider';

export default {
  title: 'Base styles/Theme',
};

const Template: Story<ThemeProviderProps> = (args: ThemeProviderProps) => {
  return (
    <ThemeProvider {...args}>
      {({ theme }) => (
        <>
          <div>bgLight</div>
          <div className={`h-8 w-8 ${theme.bgLight}`} />
          <div>bgMedium</div>
          <div className={`h-8 w-8 ${theme.bgMedium}`} />
          <div>bgDark</div>
          <div className={`h-8 w-8 ${theme.bgDark}`} />
          <div>textLight</div>
          <div className={`text-2xl ${theme.textLight}`}>Text</div>
          <div>textMedium</div>
          <div className={`text-2xl ${theme.textMedium}`}>Text</div>
          <div>textDark</div>
          <div className={`text-2xl ${theme.textDark}`}>Text</div>
          <div>border</div>
          <div className={`h-8 w-8 border-4 ${theme.border}`} />
        </>
      )}
    </ThemeProvider>
  );
};

export const Theme = Template.bind({});
Theme.args = {
  theme: 'purple',
};
Theme.argTypes = {
  theme: {
    options: ['blue', 'green', 'purple', 'yellow', 'lime', 'amber'],
    control: { type: 'radio' },
  },
};
