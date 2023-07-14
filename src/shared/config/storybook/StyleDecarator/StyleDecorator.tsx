import 'app/styles/style.scss';
import { Decorator } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';
import { Theme } from 'app/providers/ThemeProvider';

export const StyleDecorator: Decorator = (StoryComponent) => {
  const mode = useDarkMode() ? Theme.DARK : Theme.LIGHT;

  return (
    <div className={`app ${mode}`}>
      <StoryComponent />
    </div>
  );
};
