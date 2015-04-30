'use strict';

var getGoogleMapsScript = require('./getGoogleMapsScript');

function googleMapsPlugin(options) {
    var options = options;

    return {
        name: 'googleMapsPlugin',
        plugContext: function () {
            return {
                plugComponentContext: function (componentContext) {
                    componentContext.getGoogleMapsScript = getGoogleMapsScript.bind(null, options);
                }
            };
        },
        dehydrate: function () {
            return { options: options };
        },
        rehydrate: function (state) {
            options = state.options;
        }
    };
}

module.exports = googleMapsPlugin;
