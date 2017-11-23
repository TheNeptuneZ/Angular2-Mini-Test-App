import { Routes} from '@angular/router'
import {EventListComponent} from './events/events-list.component'
import {EventDetailsComponent} from './events/event-details/event-details.component'
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator';


export const appRoutes:Routes = [

    { path : 'events' , component : EventListComponent },
    { path : 'events/:id' , component : EventDetailsComponent, canActivate : [EventRouteActivator] },
    { path : '' , redirectTo :'/events', pathMatch: 'full'  },
    { path : '404' , component : Error404Component }


]


