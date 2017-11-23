"use strict";
var events_list_component_1 = require("./events/events-list.component");
var event_details_component_1 = require("./events/event-details/event-details.component");
var _404_component_1 = require("./errors/404.component");
var event_route_activator_1 = require("./events/event-details/event-route-activator");
exports.appRoutes = [
    { path: 'events', component: events_list_component_1.EventListComponent },
    { path: 'events/:id', component: event_details_component_1.EventDetailsComponent, canActivate: [event_route_activator_1.EventRouteActivator] },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: '404', component: _404_component_1.Error404Component }
];
//# sourceMappingURL=routes.js.map