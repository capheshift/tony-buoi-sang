/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var DefaultLayout = React.createFactory(require('../layouts/Default'));

var HomePage = React.createClass({
  getInitialState: function () {
    return {
      data: [],
      paging: {},
      cache: {}
    };
  },

  componentWillMount: function () {
    var that = this;
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '148203832185750',
        xfbml      : true,
        version    : 'v2.4'
      });
      that.getData();
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },

  cache: function () {

  },

  getData: function () {
    var that = this;
    var appId = '148203832185750';
    var appSecret = 'f566359f16826bba531241d42c464cd8';
    var url = 'https://graph.facebook.com/oauth/access_token?grant_type=client_credentials&client_id=' + appId + '&client_secret=' + appSecret;
    var pageName = 'TonyBuoiSang';

    return $.ajax({
      url: url,
      method: 'GET',
      success: function (data) {
        FB.api(pageName + '/feed?' + data, 'get', function (response) {
          if (response && !response.error) {
            that.setState({
              data: response.data,
              paging: response.paging
            });
          }
        });
      }
    });
  },

  getDefaultProps: function() {
    return {
      layout: DefaultLayout
    };
  },

  previous: function () {
    var that = this;
    var url = this.state.paging.previous;
    $('body').animate({scrollTop: 0}, 1000);
    return $.ajax({
      url: url,
      method: 'GET',
      success: function (res) {
        if (res.data.length) {
          that.setState({
            data: res.data,
            paging: res.paging
          });
        }
      }
    });
  },

  next: function () {
    var that = this;
    var url = this.state.paging.next;
    $('body').animate({scrollTop: 0}, 1000);
    return $.ajax({
      url: url,
      method: 'GET',
      success: function (res) {
        if (res.data.length) {
          that.setState({
            data: res.data,
            paging: res.paging
          });
        }
      }
    });
  },

  render: function() {
    var listItem = [];
    if (this.state.data.length) {
      this.state.data.map(function (item) {
        listItem.push(
          <div className="content">
            <p>
              {item.message}
              <br /><span className="date-time">{moment(item.created_time).format('DD/MM/YYYY')} - {moment(item.created_time).fromNow()}</span>
            </p>
          </div>
        );
      });
    }
    return (
      <div>
        <div className="contents">
          {listItem}
        </div>
        <div className="col-six">
          <button className="button-primary u-full-width" onClick={this.previous}>PREVIOUS</button>
        </div>
        <div className="col-six">
          <button className="button-primary u-full-width" onClick={this.next}>NEXT</button>
        </div>
      </div>
    );
  }
});

module.exports = HomePage;
