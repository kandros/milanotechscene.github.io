var AppViewModel = function () {
    var self = this;
    self.email = ko.observable();

    self.load = function() {
        self.email = "pino@gino.com"
    }
}

var viewModel = new AppViewModel()

// extend your view-model with pager.js specific data
pager.extendWithPage(viewModel);
// apply the view-model using KnockoutJS as normal
ko.applyBindings(viewModel);
// start pager.js
pager.start();