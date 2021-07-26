import React from 'react';
import CSSModules from 'react-css-modules';
import { withTranslation } from 'react-i18next';

import styles from './styles.less';

const ButtonsComponent = ({ t }) => (
  <div styleName="buttons">
    <a target="_blank" rel="noopener noreferrer" href="http://bit.ly/playseekandroid">
      <button styleName="google-play-button">
        <i styleName="play-market-icon" />
        <span dangerouslySetInnerHTML={{ __html: t('BUTTON_GOOGLE_PLAY') }} />
      </button>
    </a>
    <a target="_blank" rel="noopener noreferrer" href="http://bit.ly/playseekios">
      <button>
        <i styleName="app-store-icon" />
        <span dangerouslySetInnerHTML={{ __html: t('BUTTON_APP_STORE') }} />
      </button>
    </a>
  </div>
);

export const Buttons = withTranslation()(
  CSSModules(ButtonsComponent, styles, { allowMultiple: true }),
);
