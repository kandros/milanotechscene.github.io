require('./groups.scss');

var React = require('react');
var Group = require('./Group');
var helpers = require('../../util/helpers.js');

var GroupsList = React.createClass({
  getInitialState: function() {
    return {
      groups: []
    };
  },
  componentDidMount: function() {
    helpers.getGroups(this);
  },
  render: function() {
    var groups = this.state.groups.map(function(group, index) {
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
