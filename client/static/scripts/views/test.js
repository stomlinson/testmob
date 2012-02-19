/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

TestMob.Modules.Test = (function() {
  "use strict";

  var tm = TestMob,
      dom = tm.DOM,
      complete = tm.Helpers.complete,
      sc;

  function addClassIfTrue(test, className) {
    dom[test ? "addClass" : "removeClass"](this.getTarget(), className);
  }

  function updateDisplay() {
    var self = this,
        data = self.dataContainer.toObject();

    addClassIfTrue.call(self, !data.complete, "incomplete");
    addClassIfTrue.call(self, data.complete && !data.failed, "passed");
    addClassIfTrue.call(self, data.failed, "failed");

    var target = dom.getElements(".failures ul", self.getTarget());
    dom.setInner(target, "");
    for(var failure, index = 0; failure = data.failed_tests[index]; index++) {
      var el = dom.createElement("li", failure);
      dom.appendTo(el, target);
    }
  }

  var Module = AFrame.DataForm.extend({
    init: function(options, callback) {
      var self=this;

      sc.init.call(self, options);

      updateDisplay.call(self);
      self.dataContainer.bindEvent("set_complete", updateDisplay, self);

      complete(callback, self);
    }
  });

  sc = Module.sc;

  return Module;
}());

