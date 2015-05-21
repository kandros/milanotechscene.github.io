function Event(data) {
    this.name = ko.observable(data.name);
    this.logo = ko.observable(data.logo);
}

function EventListViewModel() {
    // Data
    var self = this;
    self.events = ko.observableArray([]);
  
    $.getJSON("https://milanotechscene.apispark.net/v1/groups", function(allData) {
        var mappedEvents = $.map(allData, function(item) { return new Event(item) });
        self.events(mappedEvents);
    });


    $.getJSON("https://www.googleapis.com/calendar/v3/calendars/startmiup.it_lnvisvcuum6rdsm1v101fem2i8@group.calendar.google.com/events?key=AIzaSyBTWrK5hUt9yZ_zta3AUoKorBTHeW2fBlc", function(allData) {
        console.log("CALENDAAAAAAAAAAAAAAAAAAR")
        console.log(allData)
    });
    

}

ko.applyBindings(new EventListViewModel());