import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { EventsAppComponent } from './events-app.component'
import { EventListComponent } from './events/events-list.component'
import {EventThumbnailComponent} from './events/event-thumbnail.component'
import {NavBarComponent} from './nav/navbar.component'
import {Eventservice} from './shared/event.service'
import {ToastrService} from './common/toastr.service'
import {EventDetailsComponent} from './events/event-details/event-details.component'
import {appRoutes} from './routes'
import {RouterModule} from '@angular/router'
import { CreateEventComponent } from './shared/create-event.comonent';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator';

@NgModule ({

    imports: [ BrowserModule , RouterModule.forRoot(appRoutes) ],
    declarations : [EventsAppComponent , EventListComponent, EventThumbnailComponent,
         NavBarComponent, EventDetailsComponent , CreateEventComponent, Error404Component  ],
    bootstrap: [ EventsAppComponent ],
    providers : [ Eventservice , ToastrService , EventRouteActivator ]
    

})

export class AppModule{
}
