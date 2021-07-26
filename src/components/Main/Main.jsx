import React from 'react';
import CSSModules from 'react-css-modules';
import { withTranslation } from 'react-i18next';

import { Buttons } from '../Buttons';

import styles from './styles.less';

const MainComponent = ({ t }) => (
  <section styleName="main-container">
    <div styleName="content">
      <h1>{t('MAIN_SPORT_IN_ONE_CLICK')}</h1>
      <div styleName="block">
        <span styleName="text">{t('MAIN_DESCRIPTION')}</span>
        <Buttons />
      </div>
    </div>
  </section>
);

export const Main = withTranslation()(
  CSSModules(MainComponent, styles, { allowMultiple: true }),
);
