var React = require('react');
var ReactDOM = require('react-dom');
var Timeline = require('./components/Timeline/Timeline');
var GroupsList = require('./components/Groups/GroupsList');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Timeline />
        <GroupsList />
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('app'));
