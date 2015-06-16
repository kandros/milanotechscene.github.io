function Group(data) {
    this.name = ko.observable(data.name);
    this.logo = ko.observable(data.logo);
    this.url = ko.observable(data.url);
    this.topics = ko.observable(data.topics);
}

function Event(data) {
    this.summary = ko.observable(data.summary);
    this.date = ko.observable(data.start.dateTime);
    this.description = ko.observable(data.description);
    this.htmlLink = ko.observable(data.htmlLink)
}

function GroupListViewModel() {
    var self = this;
    self.showContactForm = ko.observable(true)
    self.showThankYou = ko.observable(false)
    self.groups = ko.observableArray([]);
    self.email = ko.observable();
    self.firstName = ko.observable();
    self.lastName = ko.observable();
    self.name = ko.computed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);

    $.getJSON('https://www.googledrive.com/host/0B5ENAUFZNl-YLXpKTHJ3cmY4ZGc', function(allData) {
        var mappedGroups = $.map(allData, function(item) { return new Group(item) });
        self.groups(mappedGroups);
    });

    self.events = ko.observableArray([]);

    $.getJSON("https://www.googleapis.com/calendar/v3/calendars/startmiup.it_lnvisvcuum6rdsm1v101fem2i8@group.calendar.google.com/events?key=AIzaSyBP-eVlQhmfD0Ml630CHwWxsv27k14zjfc&maxResults=5&singleEvents=true&orderBy=startTime&timeMin=" + moment().format('YYYY-MM-DD') + "T00%3A00%3A00%2B00%3A00", function(allData) {
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
        self.showContactForm(false)
        self.showThankYou(true)
    };

}

ko.applyBindings(new GroupListViewModel());
