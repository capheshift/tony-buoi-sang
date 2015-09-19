/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var DefaultLayout = React.createFactory(require('../layouts/Default'));

var Feedback = React.createClass({
  getDefaultProps: function() {
    return {
      layout: DefaultLayout
    };
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var email = React.findDOMNode(this.refs.email).value.trim();
    var message = React.findDOMNode(this.refs.message).value.trim();

    if (!email || !message) {
      return false;
    }

    window.location.href = '#/thanks';
  },

  render: function() {
    return (
      <div>
        <div className="clear-fix"></div>
        <p>Don’t hesitate to give us your feedback which help us improve this app. Thanks.</p>
        <form className="feedback-form" onSubmit={this.handleSubmit}>
          <div className="row">
            <label for="email">Email</label>
            <input type="text" ref="email" className="u-full-width" placeholder="Your email" />
          </div>
          <div className="row">
            <label for="message">Your message</label>
            <textarea className="u-full-width" ref="message" placeholder="Your message"></textarea>
          </div>
          <div className="row">
            <button className="button-default">SUBMIT</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = Feedback;
