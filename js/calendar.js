function Task(data) {
    this.title = ko.observable(data.name);
}

function TaskListViewModel() {
    // Data
    var self = this;
    self.tasks = ko.observableArray([]);

    // Load initial state from server, convert it to Task instances, then populate self.tasks
    $.getJSON("https://milanotechscene.apispark.net/v1/companies", function(allData) {
        var mappedTasks = $.map(allData, function(item) { return new Task(item) });
        self.tasks(mappedTasks);
    });      
//71b37fd5-8901-4ce3-8304-766a730aa39c:40c3a9d7-ed40-4767-88c2-1a0054e4a0b2
}

ko.applyBindings(new TaskListViewModel());