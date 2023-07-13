import { classNames } from 'shared/lib';
import { AppRouter } from 'app/providers/Router';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from 'app/providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import '../styles/style.scss';
import { Loader } from 'shared/ui/Loader';


export const App = () => {
  const { theme } = useTheme();

  return (
    <Suspense fallback={<Loader />}>
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <div className="content-page ">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};
