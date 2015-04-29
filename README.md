Facebook SDK with Fluxible
==========================

Plug & play facebook SDK for your fluxible application !

Features
--------

 * Works with webpack / browserify
 * Loads facebook SDK asynchronously (thanks to es6 Promises)
 * Shares configuration between server / client (means you can use environment variables)
 * Doesn't load SDK on server side

Install
-------

Add the module to your fluxible project :

    npm install --save fluxible-plugin-facebook

Add it to your fluxible context :

```javascript

import facebookPlugin from 'fluxible-plugin-facebook';

app.plug(facebookplugin({
    /* https://developers.facebook.com/docs/javascript/reference/FB.init/v2.3 options */
    appId: 'xxx'
}));

```

Usage
-----

From a component :

```javascript

class FooComponent {

    static contextTypes = {
        getFacebookSdk: React.PropTypes.func
    };

    // ...

    plop() {
        this.context.getFacebookSdk().then(sdk => /* do whatever */);
    }

}

```