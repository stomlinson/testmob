/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  "use strict";

  var tm = TestMob,
      Family = tm.Modules.Family,
      family;

  module("family", {
    setup: function() {
    },

    teardown: function() {
    }
  });

  test("can create family", function() {
    family = Family.create({});
    family.start({
      authModel: new AFrame.DataContainer()
    });

    ok(family, "family created");
  });

}());
