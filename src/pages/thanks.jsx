/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var DefaultLayout = React.createFactory(require('../layouts/Default'));

var Thanks = React.createClass({
  getDefaultProps: function() {
    return {
      layout: DefaultLayout
    };
  },

  render: function() {
    return (
      <div>
        <div className="clear-fix"></div>
        <p>Thanks for your feedback! <a href="/">Comeback home!</a></p>
      </div>
    );
  }
});

module.exports = Thanks;
