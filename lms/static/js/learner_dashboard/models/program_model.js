import Backbone from 'backbone';

function addCardSuffix(card_image_url) {
  const dotIndex = card_image_url.lastIndexOf('.');
  if (dotIndex === -1) return card_image_url;
  const new_file_name = card_image_url.slice(0, dotIndex) + '.card' + card_image_url.slice(dotIndex);
  return new_file_name;
}

/**
 * Model for Course Programs.
 */
class ProgramModel extends Backbone.Model {
    initialize(data) {
        if (data) {
            this.set({
                title: data.title,
                type: data.type,
                subtitle: data.subtitle,
                authoring_organizations: data.authoring_organizations,
                detailUrl: data.detail_url,
                xsmallBannerUrl: (data.banner_image && data.banner_image['x-small']) ? data.banner_image['x-small'].url : '',
                smallBannerUrl: (data.banner_image && data.banner_image.small) ? data.banner_image.small.url : '',
                mediumBannerUrl: (data.banner_image && data.banner_image.medium) ? data.banner_image.medium.url : '',
                cardUrl: (data.card_image_url ? addCardSuffix(data.card_image_url) : ''),
                breakpoints: {
                    max: {
                        xsmall: '320px',
                        small: '540px',
                        medium: '768px',
                        large: '979px',
                    },
                },
            });
        }
    }
}

export default ProgramModel;
