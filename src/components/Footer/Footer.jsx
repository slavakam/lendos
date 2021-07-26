import React from 'react';
import CSSModules from 'react-css-modules';
import { withTranslation } from 'react-i18next';

import styles from './styles.less';

const FooterComponent = ({ t, onHowItWorkClick, onAboutUsClick }) => (
  <footer styleName="footer-container">
    <div styleName="footer-content">
      <i styleName="logo" />
      <a onClick={onAboutUsClick}>{t('ABOUT_US')}</a>
      <a onClick={onHowItWorkClick}>{t('HOW_DOES_IT_WORK')}</a>
      <a>Privacy policy</a>
      <span>&#169; 2021, All rights reserved</span>
    </div>
  </footer>
);

export const Footer = withTranslation()(
  CSSModules(FooterComponent, styles, { allowMultiple: true }),
);
