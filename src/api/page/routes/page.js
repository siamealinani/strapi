'use strict';

const middlewares = require('../../../../config/middlewares');

/**
 * page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::page.page', {
    config: {
        find: {
            middlewares: ['api::page.home-page-populate']
        },
        findOne: {
            middlewares: ['api::page.home-page-populate']
        }
    }
});
