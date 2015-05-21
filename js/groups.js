function Group(data) {
    this.name = ko.observable(data.name);
    this.logo = ko.observable(data.logo);
}

function GroupListViewModel() {
    var self = this;
    self.groups = ko.observableArray([]);
  
    $.getJSON("https://milanotechscene.apispark.net/v1/groups", function(allData) {
        var mappedGroups = $.map(allData, function(item) { return new Group(item) });
        self.groups(mappedGroups);
    });

    self.events = ko.observableArray([]);
  
    $.getJSON("https://www.googleapis.com/calendar/v3/calendars/startmiup.it_lnvisvcuum6rdsm1v101fem2i8@group.calendar.google.com/events?key=AIzaSyBP-eVlQhmfD0Ml630CHwWxsv27k14zjfc", function(allData) {
        console.log(allData.items)
        var mappedEvents = $.map(allData.items, function(item) { return new Event(item) });
        self.events(mappedEvents);
    });

}

function Event(data) {
    this.summary = ko.observable(data.summary);
}

ko.applyBindings(new GroupListViewModel());