import React from 'react';
import CSSModules from 'react-css-modules';
import { withTranslation } from 'react-i18next';

import styles from './styles.less';

const WhatIsPlayseekComponent = ({ t, aboutUsRef }) => (
  <section ref={aboutUsRef}>
    <div styleName="what-is-playseek">
      <h2>{t('WHAT_IS_PLAYSEEK_TITLE')}</h2>
      <div styleName="description">
        <p>{t('WHAT_IS_PLAYSEEK_TEXT1')}</p>
        <p>{t('WHAT_IS_PLAYSEEK_TEXT2')}</p>
      </div>
    </div>
  </section>
);

export const WhatIsPlayseek = withTranslation()(
  CSSModules(WhatIsPlayseekComponent, styles, { allowMultiple: true }),
);
