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
      <div className="header">
        <div className="container">
          <div className="inner">
            <div className="header-logo">
              <h2><a href="/">Tony Buổi Sáng</a></h2>
            </div>
            <div className="header-nav">
              <h2 className="text-right"><a href="#/feedback"><i className="fa fa-cog fa-6"></i></a></h2>
            </div>
          </div>
        </div>
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
