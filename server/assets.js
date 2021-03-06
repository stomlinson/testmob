/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
* List of resources to be included/compressed.
*/

var assets = {
  '/lib/html5shim.js': [
    '/lib/html5shim.js'
  ],
  "/production/main.min.js": [
    "/lib/jquery.min.js",
    "/lib/ejs.js",
    "/lib/extensions.js",
    "/lib/aframe-current-jquery.js",
    "/lib/hub.js",
    "/scripts/core/test_mob.js",
    "/scripts/core/class.js",
    "/scripts/core/dom.js",
    "/scripts/core/helpers.js",
    "/scripts/core/ajax.js",
    "/scripts/core/mediator.js",
    "/scripts/core/model.js",
    "/scripts/core/module.js",
    "/scripts/core/module_manager.js",
    "/scripts/core/renderer.js",
    "/scripts/core/templates.js",
    "/scripts/core/tooltip.js",

    "/scripts/models/authentication.js",
    "/scripts/models/test.js",
    "/scripts/models/associate_test.js",
    "/scripts/models/models_factory.js",

    "/scripts/views/authentication.js",
    "/scripts/views/test.js",
    "/scripts/views/views_factory.js",

    "/scripts/xhr_events.js",
    "/scripts/job_loader.js",
    "/scripts/associate.js",
    "/scripts/boss.js",
    "/scripts/family.js",
    "/scripts/cookie_check.js",

    "/scripts/start.js"
  ],
  "/production/main.min.css": [
    "/en/chunkfive/fonts.css",
    "/css/common.css",
    "/css/mobile.css",
    "/css/tablet.css",
    "/css/desktop.css"
  ]
};

exports.assets = assets;
