'use strict';

var Promise = require('es6-promise').Promise;
var loading = false;
var resolvers = [];

var debug = require('debug')('Fluxible:GoogleMapsPlugin');

function loadMaps() {
    if (typeof window === 'undefined') {
        debug('non-browser environment, aborting google maps SDK loading');
        return Promise.reject(new Error('Not in browser'));
    }

    if (window.google && window.google.maps) {
        debug('google maps SDK already loaded, resolving promise');
        return Promise.resolve(window.google);
    }

    return new Promise(function (resolve, reject) {
        debug('appending resolver');
        resolvers.push(resolve);
        loadIfNecessary();
    });
}

module.exports = loadMaps;

function loadIfNecessary() {
    if (!loading) {
        loading = true;
        load();
    }
}

function load() {
    debug('start loading google maps SDK');
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?libraries=places&callback=onGoogleMapsLoaded';
    document.body.appendChild(script);
    window.onGoogleMapsLoaded = onGoogleMapsLoaded;
}

function onGoogleMapsLoaded() {
    debug('finished loading google maps, resolving all promises');
    resolvers.map(function (resolve) { resolve(window.google) });
    resolvers = [];
}