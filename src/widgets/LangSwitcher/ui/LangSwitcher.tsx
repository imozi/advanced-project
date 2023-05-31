import { classNames } from 'shared/lib';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button';
import cls from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<ILangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const translate = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(cls['lang-switcher'], {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={translate}
    >
      {t('Язык')}
    </Button>
  );
};
