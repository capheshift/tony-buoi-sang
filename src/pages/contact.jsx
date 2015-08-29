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
<<<<<<< HEAD
        <p>CONTACT thong</p>
=======
        <p>DEMO HERE</p>
>>>>>>> 84312abb239202e688de110213fe27272212e1d1
        <button>Skeleton</button>
      </div>
    );
  }
});

module.exports = ContactPage;
