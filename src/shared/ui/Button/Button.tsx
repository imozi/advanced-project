import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { classNames } from 'shared/lib';
import cls from './Button.module.scss';
import './ButtonTheme.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  theme?: ThemeButton;
}

export const Button: FC<IButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      type="button"
      className={classNames(cls.button, {}, [className, theme])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
