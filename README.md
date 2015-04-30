Google Maps Script with Fluxible
==========================

Plug & play google maps script for your fluxible application !

Features
--------

 * Works with webpack / browserify
 * Loads Google Maps script asynchronously (thanks to es6 Promises)
 * Comes with a "do whatever you want" (MIT) license
 * Doesn't load script on server side

Install
-------

Add the module to your fluxible project :

    npm install --save fluxible-plugin-google-maps

Add it to your fluxible context :

```javascript

import googleMapsPlugin from 'fluxible-plugin-google-maps';

app.plug(googleMapsPlugin());

```

Usage
-----

Add `getGoogleMapsScript` to the react's context :

```

Application = provideContext(Application, {

    // ...

    getGoogleMapsScript: React.PropTypes.func

});

```

From a component :

```javascript

class FooComponent {

    static contextTypes = {
        getGoogleMapsScript: React.PropTypes.func
    };

    // ...

    plop() {
        this.context.getGoogleMapsScript().then(google => /* do whatever */);
    }

}

```
