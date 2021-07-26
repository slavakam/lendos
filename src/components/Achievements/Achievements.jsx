import React from 'react';
import CSSModules from 'react-css-modules';
import { withTranslation } from 'react-i18next';

import styles from './styles.less';

const AchievementsComponent = ({ t }) => (
  <section>
    <div styleName="achievements">
      <h2>{t('ACHIEVEMENTS_TITLE')}</h2>
      <div styleName="logos">
        <div styleName="line" />
        <div styleName="block">
          <div styleName="image-wrapper"><i styleName="incubator-logo" /></div>
          <span styleName="year">2018</span>
          <p styleName="text">{t('ACHIEVEMENTS_1991')}</p>
        </div>
        <div styleName="block">
          <div styleName="image-wrapper"><i styleName="spa-logo" /></div>
          <span styleName="year">2018</span>
          <p styleName="text">{t('ACHIEVEMENTS_SPA')}</p>
        </div>
        <div styleName="block">
          <div styleName="image-wrapper"><i styleName="hype-logo" /></div>
          <span styleName="year">2019</span>
          <p styleName="text">{t('ACHIEVEMENTS_HYPE')}</p>
        </div>
        <div styleName="block">
          <div styleName="image-wrapper"><i styleName="tta-logo" /></div>
          <span styleName="year">2019</span>
          <p styleName="text">{t('ACHIEVEMENTS_TTA')}</p>
        </div>
      </div>
    </div>
  </section>
);

export const Achievements = withTranslation()(
  CSSModules(AchievementsComponent, styles, { allowMultiple: true }),
);
