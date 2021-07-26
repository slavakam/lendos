import React from 'react';
import CSSModules from 'react-css-modules';
import { withTranslation } from 'react-i18next';

import { Buttons } from '../Buttons';

import styles from './styles.less';

const TryItNowComponent = ({ t }) => (
  <section styleName="try-it-now-container">
    <div styleName="try-it-now-content">
      <h2>{t('TRY_IT_NOW')}</h2>
      <Buttons />
    </div>
  </section>
);

export const TryItNow = withTranslation()(
  CSSModules(TryItNowComponent, styles, { allowMultiple: true }),
);
