require('./groups.scss');

var React = require('react');
var Group = require('./Group');

var GroupsList = React.createClass({
  render: function() {
    var groups = this.props.groups.map(function(group, index) {
      return <Group groupInfo={group} key={index} />
    });
    return (
      <div id="groups">
        <div className="wrapper cf">
          <ul>
            {groups}
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = GroupsList;
