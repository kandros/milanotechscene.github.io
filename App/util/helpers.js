var axios = require('axios');
var moment = require('moment');

function getEvents(context) {
  var that = context;
  var urlEvents = "https://www.googleapis.com/calendar/v3/calendars/3nctrbqaukrc5i8g6j7d54b9q4@group.calendar.google.com/events?key=AIzaSyBP-eVlQhmfD0Ml630CHwWxsv27k14zjfc&maxResults=5&singleEvents=true&orderBy=startTime&timeMin=" + moment().format('YYYY-MM-DD') + "T00%3A00%3A00%2B00%3A00";
  axios.get(urlEvents)
    .then(function(response) {
      var events = response.data.items;
      that.setState({
        events: events
      });
    })
    .catch(function(response) {
    });
}

function getGroups(context) {
  var that = context;
  var urlGroups = "https://b458e59e35ebffd6ffbbc3d4bbfb6c0c6b100f6a-www.googledrive.com/host/0B5ENAUFZNl-YLXpKTHJ3cmY4ZGc";
  axios.get(urlGroups)
    .then(function(response) {
      var groups = response.data;
      that.setState({
        groups: groups
      });
    })
    .catch(function(response) {
      console.log(response);
    });
}

module.exports = {
  getEvents: getEvents,
  getGroups: getGroups
};
