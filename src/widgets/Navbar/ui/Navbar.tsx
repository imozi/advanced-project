import { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls['main-link']}>
          {t('Главная')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};
