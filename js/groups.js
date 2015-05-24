function Group(data) {
    this.name = ko.observable(data.name);
    this.logo = ko.observable(data.logo);
    this.url = ko.observable(data.url);
    this.topics = ko.observable(data.topics)
}

function Event(data) {
    this.summary = ko.observable(data.summary);
    this.date = ko.observable(data.start.dateTime);
    this.description = ko.observable(data.description);
}

function GroupListViewModel() {
    var self = this;
    self.groups = ko.observableArray([]);
    self.email = ko.observable();
    self.firstName = ko.observable();
    self.lastName = ko.observable();
    self.name = ko.computed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);

    $.getJSON("https://milanotechscene.apispark.net/v1/groups", function(allData) {
        var mappedGroups = $.map(allData, function(item) { return new Group(item) });
        self.groups(mappedGroups);
    });

    self.events = ko.observableArray([]);

    $.getJSON("https://www.googleapis.com/calendar/v3/calendars/startmiup.it_lnvisvcuum6rdsm1v101fem2i8@group.calendar.google.com/events?key=AIzaSyBP-eVlQhmfD0Ml630CHwWxsv27k14zjfc&maxResults=5", function(allData) {
        var mappedEvents = $.map(allData.items, function(item) { return new Event(item) });
        self.events(mappedEvents);
    });

    self.save = function() {
        Intercom('boot', {
            app_id: "h5m9iozj",
            email: self.email(),
            firstname: self.firstName(),
            lastname: self.lastName(),
            name: self.name()
        });
    };

}

ko.applyBindings(new GroupListViewModel());
