import React from 'react';
import CSSModules from 'react-css-modules';
import { withTranslation } from 'react-i18next';

import styles from './styles.less';

const ForWhomComponent = ({ t }) => (
  <section>
    <div styleName="for-whom">
      <h2>{t('FOR_WHOM_TITLE')}</h2>
      <div styleName="kinds">
        <div styleName="block">
          <div styleName="round"><div styleName="ball" /></div>
          <div styleName="number">1</div>
          <h5>{t('FOR_WHOM_BLOCK_TITLE1')}</h5>
          <span styleName="text">{t('FOR_WHOM_BLOCK_TEXT1')}</span>
        </div>
        <div styleName="block">
          <div styleName="round"><div styleName="tennis-rockets" /></div>
          <div styleName="number">2</div>
          <h5>{t('FOR_WHOM_BLOCK_TITLE2')}</h5>
          <span styleName="text">{t('FOR_WHOM_BLOCK_TEXT2')}</span>
        </div>
        <div styleName="block">
          <div styleName="round"><div styleName="people" /></div>
          <div styleName="number">3</div>
          <h5>{t('FOR_WHOM_BLOCK_TITLE3')}</h5>
          <span styleName="text">{t('FOR_WHOM_BLOCK_TEXT3')}</span>
        </div>
      </div>
    </div>
  </section>
);

export const ForWhom = withTranslation()(
  CSSModules(ForWhomComponent, styles, { allowMultiple: true }),
);
