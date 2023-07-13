import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui/Button';
import cls from './PageError.module.scss';

interface IPageErrorProps {
  className?: string;
}

export const PageError = ({ className }: IPageErrorProps) => {
  const { t } = useTranslation();

  const onReloadPage = () => [
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  ]

  return (
    <div className={classNames(cls['page-error'], {}, [className])}>
      {t('Произошла непредвиденная ошибка!')}
      <Button onClick={onReloadPage}>{t('Перезагрузить страницу')}</Button>
    </div>
  );
};
