/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var DefaultLayout = React.createFactory(require('../layouts/Default'));

var HomePage = React.createClass({
  getDefaultProps: function() {
    return {
      layout: DefaultLayout
    };
  },

  getInitialState: function () {
    return {
      data: [],
      paging: {}
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

  getData: function () {
    var that = this;
    var appId = '148203832185750';
    var appSecret = 'f566359f16826bba531241d42c464cd8';
    var url = 'https://graph.facebook.com/oauth/access_token?grant_type=client_credentials&client_id=' + appId + '&client_secret=' + appSecret;
    var pageName = 'TonyBuoiSang';
    var limit = 10;

    return $.ajax({
      url: url,
      method: 'GET',
      success: function (data) {
        FB.api(pageName + '/feed?limit=' + limit + '&' + data, 'get', function (response) {
          if (response && !response.error) {
            that.setState({
              data: response.data,
              paging: response.paging
            });
          }
        });
      },
      error: function (xhr, status, error) {
        console.log(xhr, status, error);
      }
    });
  },

  handleLoadMore: function () {
    var that = this;
    var url = this.state.paging && this.state.paging.next;
    var currentData = this.state.data;

    return $.ajax({
      url: url,
      method: 'GET',
      success: function (res) {
        if (res.data.length) {
          currentData = currentData.concat(res.data);
          that.setState({
            data: currentData,
            paging: res.paging
          });
        }
      },
      error: function (xhr, status, error) {
        console.log(xhr, status, error);
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
              <br />
              <span className="date-time">
                {moment(item.created_time).format('DD/MM/YYYY')} - {moment(item.created_time).fromNow()}
              </span>
            </p>
          </div>
        );
      });
    }

    return (
      <div>
        <div className="clear-fix"></div>
        <div className="contents">
          {listItem}
        </div>
        <div className="load-more">
          <button className="button-default u-full-width" onClick={this.handleLoadMore}>LOAD MORE</button>
        </div>
      </div>
    );
  }
});

module.exports = HomePage;
