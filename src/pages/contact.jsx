/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var DefaultLayout = React.createFactory(require('../layouts/Default'));

var ContactPage = React.createClass({
  displayName: 'Contact page',

  getDefaultProps: function() {
    return {
      layout: DefaultLayout
    };
  },

  render: function() {
    return (
      <div>
        <p>CONTACT thong</p>
        <button>Skeleton</button>
      </div>
    );
  }
});

module.exports = ContactPage;
