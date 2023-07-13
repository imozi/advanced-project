import { classNames } from 'shared/lib';
import { Loader } from 'shared/ui/Loader';
import cls from './PageLoader.module.scss';

interface IPageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: IPageLoaderProps) => (
  <div className={classNames(cls['page-loader'], {}, [className])}>
    <Loader />
  </div>
);
