import React from 'react';
import CSSModules from 'react-css-modules';
import { withTranslation } from 'react-i18next';

import styles from './styles.less';

const CooperationComponent = ({ t }) => (
  <section styleName="cooperation-container">
    <div styleName="cooperation-content">
      <h2 styleName="title">{t('COOPERATION_TITLE')}</h2>
      <div styleName="contacts">
        <span>+380 (93) 460-30-56</span>
        <span>playseek.official@gmail.com</span>
        <div styleName="icons">
          <a href="https://facebook.com" target="_blank" styleName="facebook">
            <i styleName="facebook-icon" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <i styleName="instagram-icon" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export const Cooperation = withTranslation()(
  CSSModules(CooperationComponent, styles),
);
