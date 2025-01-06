'use strict';

/**
 * `home-page-populate` middleware
 */
const homePagePopulate = {
  populate: {
    metaData: {
      populate: {
        metaImage: {
          populate: true,
          fields: ["name","alternativeText","url"]
        }
      }
    },
    blocks: {
      populate: {
        link: {
          populate: true
        },
        image: {
          fields: ["name","alternativeText", "url"]
        },
        rightImage1: {
          fields: ["name","alternativeText", "url"]
        },
        rightImage2: {
          fields: ["name","alternativeText", "url"]
        },
        rightImage3: {
          fields: ["name","alternativeText", "url"]
        },
        card: {
          populate: {
            image: {
              fields: ["name","alternativeText", "url"]
            }
          }
        },
        video: {
          populate: {
             fields: ["name","alternativeText", "url"]
          }
        }
      }
    }
  }
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In home-page-populate middleware.');
    ctx.query = {
      ...homePagePopulate,
      ...ctx.query
    }
    await next();
  };
};
