/**
 * @jsx React.DOM
 */
'use strict';

var DEBUG = false;
var _name = 'Navbar.jsx';
var React = require('react');
var Link = React.createFactory(require('./Link'));

var Navbar = React.createClass({

  displayName: _name,

  render() {
    return (
      <div className="text-center">
        <nav className="navbar">
          <div className="header">
            <h1>Tony Buổi Sáng</h1>
          </div>
        </nav>
      </div>
    );
  },

  /**
   * Internal Methods
   */
  _checkUri: function(uriCompare) {
    var _uri = this.props.uri[0];
    if (DEBUG) {
      console.log('[*] ' + _name + ':_checkUri ---');
      console.log(uriCompare);
      console.log(this.props.uri);
    }
    return (_uri === uriCompare) ? 'active': '';
  }

});

module.exports = Navbar;
