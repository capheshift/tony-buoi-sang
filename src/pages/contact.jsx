/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var DefaultLayout = React.createFactory(require('../layouts/Default'));

var Contact = React.createClass({

  getDefaultProps: function() {
    return {
      layout: DefaultLayout
    };
  },

  render: function() {
    return (
      <div className="demo">
        <div className="main-content">
          <div className="data">
            <div className="new">
              <p>
                ----THÂN GỬI CÁC BẠN
                Chào các bạn , mình cần mua lại các loại giáo trình,sach thể loại nào cũng được. ( tặng cho các bạn tân sinh viên khó khăn và các bạn trao đổi khác)
                Mình và một số bạn cùng nhau làm dự án này , hi vọng việc quyên góp tặng sách không chỉ ở trường khtn mà còn nhiều trường khác nữa.
                các bạn nào có sách có thể comment hoặc inbox cho mình qua email.pttl3sheep@gmail.com . rất mong các bạn giúp đỡ. Xin cảm ơn.!
              </p>
            </div>
            <div className="date-time">
              <span>3hrs</span> <span>27</span> <span>Jun</span> <span>2015</span>
            </div>
          </div>
          <div className="data">
            <div className="new">
              <p>
                ----THÂN GỬI CÁC BẠN
                Chào các bạn , mình cần mua lại các loại giáo trình,sach thể loại nào cũng được. ( tặng cho các bạn tân sinh viên khó khăn và các bạn trao đổi khác)
                Mình và một số bạn cùng nhau làm dự án này , hi vọng việc quyên góp tặng sách không chỉ ở trường khtn mà còn nhiều trường khác nữa.
                các bạn nào có sách có thể comment hoặc inbox cho mình qua email.pttl3sheep@gmail.com . rất mong các bạn giúp đỡ. Xin cảm ơn.!
              </p>
            </div>
            <div className="date-time">
              <span>3hrs</span> <span>27</span> <span>Jun</span> <span>2015</span>
            </div>
          </div>
          <div className="data">
            <div className="new">
              <p>
                ----THÂN GỬI CÁC BẠN
                Chào các bạn , mình cần mua lại các loại giáo trình,sach thể loại nào cũng được. ( tặng cho các bạn tân sinh viên khó khăn và các bạn trao đổi khác)
                Mình và một số bạn cùng nhau làm dự án này , hi vọng việc quyên góp tặng sách không chỉ ở trường khtn mà còn nhiều trường khác nữa.
                các bạn nào có sách có thể comment hoặc inbox cho mình qua email.pttl3sheep@gmail.com . rất mong các bạn giúp đỡ. Xin cảm ơn.!
              </p>
            </div>
            <div className="date-time">
              <span>3hrs</span> <span>27</span> <span>Jun</span> <span>2015</span>
            </div>
          </div>
          <div className="col-six">
            <button className="button-primary u-full-width">PREVIOUS</button>
          </div>
          <div className="col-six">
            <button className="button-primary u-full-width">NEXT</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Contact;
