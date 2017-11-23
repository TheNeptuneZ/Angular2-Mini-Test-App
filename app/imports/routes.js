"use strict";
var events_list_component_1 = require("../events/events-list.component");
var event_details_component_1 = require("../events/event-details/event-details.component");
exports.appRoutes = [
    { path: 'event', component: events_list_component_1.EventListComponent },
    { path: 'event/:id', component: event_details_component_1.EventDetailsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map