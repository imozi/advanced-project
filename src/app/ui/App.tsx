import { Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib";
import { AppRouter } from "app/providers/Router";
import "../styles/style.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/">Main</Link>
      <Link to="about">About</Link>
      <hr />
      <button onClick={toggleTheme}>Toggle</button>
      <AppRouter />
    </div>
  );
};
