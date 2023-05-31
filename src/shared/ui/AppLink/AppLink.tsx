import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
  otherProps?: any;
  theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLinkProps> = (props) => {
  const {
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    otherProps,
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.link, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
