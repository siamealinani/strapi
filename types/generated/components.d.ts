import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    image: Attribute.Media;
    rightImage1: Attribute.Media;
    rightImage2: Attribute.Media;
    rightImage3: Attribute.Media;
    rightHeading1: Attribute.String;
    rightHeading2: Attribute.String;
    rightHeading3: Attribute.String;
    rightText1: Attribute.Text;
    rightText2: Attribute.Text;
    rightText3: Attribute.Text;
  };
}

export interface BlocksNavigationMenu extends Schema.Component {
  collectionName: 'components_blocks_navigation_menus';
  info: {
    displayName: 'Navigation Menu';
  };
  attributes: {
    link: Attribute.Component<'elements.button-link', true>;
  };
}

export interface BlocksRow extends Schema.Component {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'Row';
    description: '';
  };
  attributes: {
    card: Attribute.Component<'elements.card', true>;
    Heading: Attribute.String;
  };
}

export interface BlocksVideoStrip extends Schema.Component {
  collectionName: 'components_blocks_video_strips';
  info: {
    displayName: 'Video Strip';
    description: '';
  };
  attributes: {
    video: Attribute.Media;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface NavsMainNavigation extends Schema.Component {
  collectionName: 'components_navs_main_navigations';
  info: {
    displayName: 'Main Navigation';
    description: '';
  };
  attributes: {
    link: Attribute.Component<'elements.button-link', true>;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.hero': BlocksHero;
      'blocks.navigation-menu': BlocksNavigationMenu;
      'blocks.row': BlocksRow;
      'blocks.video-strip': BlocksVideoStrip;
      'elements.button-link': ElementsButtonLink;
      'elements.card': ElementsCard;
      'navs.main-navigation': NavsMainNavigation;
      'seo.meta-data': SeoMetaData;
    }
  }
}
