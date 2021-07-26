import React from 'react';
import CSSModules from 'react-css-modules';
import { withTranslation } from 'react-i18next';

import styles from './styles.less';

const HowDoesItWorkComponent = ({ t, howItWorkRef }) => (
  <section styleName="how-does-it-work-container" ref={howItWorkRef}>
    <div styleName="how-does-it-work-content">
      <h2>{t('HOW_DOES_IT_WORK_TITLE')}</h2>
      <div styleName="phones">
        <div styleName="block">
          <div styleName="phone1" />
          <div styleName="line-block">
            <div styleName="point" />
            <div styleName="line" />
            <div styleName="number">01</div>
          </div>
          <h5>{t('HOW_DOES_IT_WORK_BLOCK_TITLE1')}</h5>
          <span>{t('HOW_DOES_IT_WORK_BLOCK_TEXT1')}</span>
        </div>

        <div styleName="block">
          <div styleName="phone2" />
          <div styleName="line-block">
            <div styleName="point" />
            <div styleName="line" />
            <div styleName="number">02</div>
          </div>
          <h5>{t('HOW_DOES_IT_WORK_BLOCK_TITLE2')}</h5>
          <span>{t('HOW_DOES_IT_WORK_BLOCK_TEXT2')}</span>
        </div>

        <div styleName="block">
          <div styleName="phone3" />
          <div styleName="line-block">
            <div styleName="point" />
            <div styleName="line" />
            <div styleName="number">03</div>
          </div>
          <h5>{t('HOW_DOES_IT_WORK_BLOCK_TITLE3')}</h5>
          <span>{t('HOW_DOES_IT_WORK_BLOCK_TEXT3')}</span>
        </div>
      </div>
    </div>
  </section>
);

export const HowDoesItWork = withTranslation()(
  CSSModules(HowDoesItWorkComponent, styles, { allowMultiple: true }),
);
