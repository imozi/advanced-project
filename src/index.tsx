import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';
import { ThemeProvider } from './app/providers/ThemeProvider/ui/ThemeProvider';
import 'shared/config/i18n';

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
