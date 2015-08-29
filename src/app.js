/*!
 * Facebook React Starter Kit | https://github.com/kriasoft/react-starter-kit
 * Copyright (c) KriaSoft, LLC. All rights reserved. See LICENSE.txt
 * and
 * https://github.com/alduro/generator-flux-webapp
 */

'use strict';

var React = require('react');
var assign = require('react/lib/Object.assign');
var {Router} = require('director');
var AppConfig = require('./config.js');

// Export React so the dev tools can find it
(window !== window.top ? window.top : window).React = React;

/**
 * Check if Page component has a layout property; and if yes, wrap the page
 * into the specified layout, then mount to container in config file.
 */
function render(uri, page) {
  var child, props = {
    uri: uri
  };
  var obj = page();
  while (obj.props && obj.props.layout) {
    child = page(props, child);
    props = assign(props, obj.props);
    obj = obj.props.layout;
  }
  if (!obj || typeof obj !== 'function') {
    throw 'Did you set "layout" in "props" for "' + uri + '" route?';
  }
  React.render(obj(props, child), AppConfig.container);
}

// Initialize a router
// Define URL routes
// See https://github.com/flatiron/director
var router = new Router({
  // Main Route
  '/': function() {
    var page = React.createFactory(require('./pages/index'));
    render(router.getRoute(), page);
  },
  '/contact': function() {
    var page = React.createFactory(require('./pages/contact'));
    render(router.getRoute(), page);
  }
});

router.configure({
  html5history: false
}).init('/');
