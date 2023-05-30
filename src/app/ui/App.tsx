import { classNames } from "shared/lib";
import { AppRouter } from "app/providers/Router";
import "../styles/style.scss";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "app/providers/ThemeProvider";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";



export const App = () => {
  const { theme } = useTheme();

  return (
    <Suspense fallback="">
      <div className={classNames("app", {}, [theme])}>
        <Navbar />
        <div className="content-page ">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};
