/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

setup({output:%(output)d});

add_completion_callback(function() {
    add_completion_callback(function (tests, status) {
        var subtest_results = tests.map(function(x) {
            return [x.name, x.status, x.message, x.stack]
        });
        var id = location.pathname + location.search + location.hash;
        window.__results__ = JSON.stringify([id,
					     status.status,
					     status.message,
					     status.stack,
					     subtest_results]);
	
    })
});
