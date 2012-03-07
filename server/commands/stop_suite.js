/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var command_relay = require("../command_relay");

exports.bind = function(config) {
  command_relay.command_relay(config.socket, "stop_suite");
};
