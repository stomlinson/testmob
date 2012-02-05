(function() {
  "use strict";

  var tm = TestMob,
      Test = tm.Models.Test,
      model;

  module("model/test", {
    setup: function() {
      model = Test.create({});
    },

    teardown: function() {
      model.teardown();
      model = null;
    }
  });

  test("can create - default start_time set to (almost) now", function() {
    ok(model, "model created");

    var now = new Date().getTime();
    var startTime = model.get("start_time");

    var diff = now - startTime;

    ok(diff <= 5, "start_time is within 5 ms of now: " + diff);
  });
}());

