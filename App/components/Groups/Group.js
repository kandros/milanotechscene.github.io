var React = require('react');

var Group = React.createClass({
  render: function() {
    return (
      <a href={this.props.groupInfo.url} target="_blank">
        <li>
          <div className="group__logo">
            <img src={this.props.groupInfo.logo} />
          </div>
          <div className="event_desc">
            <h2>{this.props.groupInfo.name}</h2>
            <p className="data_evento">{this.props.groupInfo.topics}</p>
          </div>
        </li>
      </a>
    )
  }
});

module.exports = Group;
