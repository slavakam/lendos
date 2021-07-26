import React from 'react';
import CSSModules from 'react-css-modules';
import { withTranslation } from 'react-i18next';

import styles from './styles.less';

const PublicationsComponent = ({ t }) => (
  <section>
    <div styleName="publications">
      <h2>{t('PUBLICATIONS_TITLE')}</h2>
      <div styleName="row">
        <i styleName="delo-logo" />
        <i styleName="shakhtar-logo" />
        <i styleName="unknown-logo" />
        <i styleName="svoi-logo" />
      </div>
      <div styleName="row">
        <i styleName="shotam-logo" />
        <i styleName="khamarachos-logo" />
        <i styleName="interfaks-logo" />
      </div>
    </div>
  </section>
);

export const Publications = withTranslation()(
  CSSModules(PublicationsComponent, styles),
);
