function Event(data) {
    this.title = ko.observable(data.name);
}

function EventListViewModel() {
    // Data
    var self = this;
    self.events = ko.observableArray([]);
  
    $.getJSON("https://milanotechscene.apispark.net/v1/groups", function(allData) {
        var mappedEvents = $.map(allData, function(item) { return new Event(item) });
        self.events(mappedEvents);
    });

    

}

ko.applyBindings(new EventListViewModel());