import React from 'react';
import CSSModules from 'react-css-modules';
import { withTranslation } from 'react-i18next';

import styles from './styles.less';

const DescriptionComponent = ({ t }) => (
  <section>
    <div styleName="description">
      <div styleName="block">
        <div styleName="text-block">
          <h2>{t('DESCRIPTION_TITLE1')}</h2>
          <ul>
            <li>{t('DESCRIPTION_LIST_ITEM1')}</li>
            <li>{t('DESCRIPTION_LIST_ITEM2')}</li>
            <li>{t('DESCRIPTION_LIST_ITEM3')}</li>
          </ul>
        </div>
        <div styleName="phone-container">
          <span styleName="circles" />
          <span styleName="phone1" />
        </div>
      </div>
      <div styleName="block">
        <div styleName="phone-container">
          <span styleName="circles" />
          <span styleName="phone2" />
        </div>
        <div styleName="text-block">
          <h2>{t('DESCRIPTION_TITLE2')}</h2>
          <p>{t('DESCRIPTION_TEXT1')}</p>
          <p>{t('DESCRIPTION_TEXT2')}</p>
        </div>
      </div>
    </div>
  </section>
);

export const Description = withTranslation()(
  CSSModules(DescriptionComponent, styles, { allowMultiple: true }),
);
