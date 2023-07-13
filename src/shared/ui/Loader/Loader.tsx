import { classNames } from 'shared/lib';
import cls from './Loader.module.scss';

interface ILoaderProps {
  className?: string;
}

export const Loader = ({ className }: ILoaderProps) => (
  <span className={classNames(cls.loader, {}, [className])} />
);
