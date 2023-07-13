import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { App } from './app';
import { ThemeProvider } from './app/providers/ThemeProvider/ui/ThemeProvider';
import 'shared/config/i18n';


const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
);
