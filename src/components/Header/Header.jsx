import React, { useState } from 'react';
import CSSModules from 'react-css-modules';
import { withTranslation } from 'react-i18next';
import i18n from '../../i18n';

import styles from './styles.less';

const RU = 'ru';
const UA = 'ua';

const HeaderComponent = ({ t, onHowItWorkClick, onAboutUsClick, headerRef }) => {
  const [lng, setLng] = useState(i18n.language);
  return (
    <header styleName="header-container" ref={headerRef}>
      <div styleName="header-content">
        <i styleName="logo" />
        <div styleName="navigation">
          <select
            styleName="lng-select"
            onChange={(e) => {
              const lng = e.target.value;
              setLng(lng);
              i18n.changeLanguage(lng);
            }}
            value={lng}
          >
            <option value={UA}>UA</option>
            <option value={RU}>RU</option>
          </select>
          <a onClick={onAboutUsClick}>{t('ABOUT_US')}</a>
          <a onClick={onHowItWorkClick}>{t('HOW_DOES_IT_WORK')}</a>
        </div>
      </div>
    </header>
  )
};

export const Header = withTranslation()(
  CSSModules(HeaderComponent, styles, { allowMultiple: true }),
);
