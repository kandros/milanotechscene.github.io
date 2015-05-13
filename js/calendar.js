function Event(data) {
    this.title = ko.observable(data.name);
}

function EventListViewModel() {
    // Data
    var self = this;
    self.events = ko.observableArray([]);
  
    // $.ajax({
    //   type: "GET",
    //   url: "https://milanotechscene.apispark.net/v1/companies",
    //   dataType: 'json',
    //   data: '{}',
    //   username: "71b37fd5-8901-4ce3-8304-766a730aa39c",
    //   password: "40c3a9d7-ed40-4767-88c2-1a0054e4a0b2",
    //   success: function (){
    //       alert('Thanks for your comment!'); 
    //   }
    // });

    $.getJSON("https://milanotechscene.apispark.net/v1/companies", function(allData) {
        var mappedEvents = $.map(allData, function(item) { return new Event(item) });
        self.events(mappedEvents);
    });


//71b37fd5-8901-4ce3-8304-766a730aa39c:40c3a9d7-ed40-4767-88c2-1a0054e4a0b2
}

ko.applyBindings(new EventListViewModel());