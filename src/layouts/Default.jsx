/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Navbar = React.createFactory(require('../components/Navbar'));

var DefaultLayout = React.createClass({
  displayName: 'Default.jsx',
  getDefaultProps() {
    return {};
  },
  render() {
    return (
      <div>
        {Navbar({ uri: this.props.uri })}
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = DefaultLayout;
