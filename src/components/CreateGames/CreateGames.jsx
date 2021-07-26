import React from 'react';
import CSSModules from 'react-css-modules';
import { withTranslation } from 'react-i18next';

import styles from './styles.less';

const CreateGamesComponent = ({ t }) => (
  <section styleName="create-games-container">
    <div styleName="create-games-content">
      <h2>{t('CREATE_GAMES_TITLE')}</h2>
      <ul>
        <li>{t('CREATE_GAMES_LIST_ITEM1')}</li>
        <li>{t('CREATE_GAMES_LIST_ITEM2')}</li>
        <li>{t('CREATE_GAMES_LIST_ITEM3')}</li>
        <li>{t('CREATE_GAMES_LIST_ITEM4')}</li>
      </ul>
    </div>
  </section>
);

export const CreateGames = withTranslation()(
  CSSModules(CreateGamesComponent, styles),
);
