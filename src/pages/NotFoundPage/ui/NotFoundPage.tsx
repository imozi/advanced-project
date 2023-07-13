import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import cls from './NotFoundPage.module.scss';

interface INotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: INotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls['not-found-page'], {}, [className])}>
      {t('Страница не найдена!')}
    </div>
  );
};
