import React, { useState } from 'react';
import CSSModules from 'react-css-modules';
import { withTranslation } from 'react-i18next';

import styles from './styles.less';

const PLAYSEEK_APP = 'playseek-application';
const ARTEM_ABOUT_PLAYSEEK = 'atrem-about-playseek';
const TINDER_FOR_SPORT = 'tinder-for-sport';
const RADIO_BROADCAST = 'radio-broadcast';

const obj = {
  [PLAYSEEK_APP]: 'https://www.youtube.com/embed/1zeabHktGLc',
  [ARTEM_ABOUT_PLAYSEEK]: 'https://www.youtube.com/embed/3ei6BaXzGTc',
  [TINDER_FOR_SPORT]: 'https://www.youtube.com/embed/-dz3x1cXLgk',
  [RADIO_BROADCAST]: 'https://www.youtube.com/embed/dKWEu0-gf4A',
};

const VideosComponent = ({ t }) => {
  const [activeListItem, setListItem] = useState(PLAYSEEK_APP);
  const isActive = item => activeListItem === item;

  const activeStyleType = (
    <div styleName="active-style-type">
      <span styleName="point" />
      <span styleName="line" />
    </div>
  );

  return (
    <section styleName="container">
      <div styleName="content">
        <h2>{t('VIDEOS_TITLE')}</h2>
        <div styleName="videos">
          <div styleName="video">
            <div styleName="loader" />
            <iframe
              // width="560"
              // height="315"
              src={obj[activeListItem]}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <ul styleName="items">
            <li
              onClick={() => setListItem(PLAYSEEK_APP)}
              styleName={`item ${isActive(PLAYSEEK_APP) ? 'active' : ''}`}
            >
              {isActive(PLAYSEEK_APP) && activeStyleType}
              {t('VIDEO_LINK1')}
            </li>
            <li
              onClick={() => setListItem(ARTEM_ABOUT_PLAYSEEK)}
              styleName={`item ${isActive(ARTEM_ABOUT_PLAYSEEK) ? 'active' : ''}`}
            >
              {isActive(ARTEM_ABOUT_PLAYSEEK) && activeStyleType}
              {t('VIDEO_LINK2')}
            </li>
            <li
              onClick={() => setListItem(TINDER_FOR_SPORT)}
              styleName={`item ${isActive(TINDER_FOR_SPORT) ? 'active' : ''}`}
            >
              {isActive(TINDER_FOR_SPORT) && activeStyleType}
              {t('VIDEO_LINK3')}
            </li>
            <li
              onClick={() => setListItem(RADIO_BROADCAST)}
              styleName={`item ${isActive(RADIO_BROADCAST) ? 'active' : ''}`}
            >
              {isActive(RADIO_BROADCAST) && activeStyleType}
              {t('VIDEO_LINK4')}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export const Videos = withTranslation()(
  CSSModules(VideosComponent, styles, { allowMultiple: true }),
);
