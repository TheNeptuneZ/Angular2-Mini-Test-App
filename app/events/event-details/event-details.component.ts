import { Component } from '@angular/core'
import { Eventservice } from '../../shared/event.service';
import { ActivatedRoute } from '@angular/router'

@Component({
    templateUrl:
    '/app/events/event-details/event-details.component.html',

    styles: [
        `
        .container { padding-left:20px ; padding-right:20px ;}
        `
    ]
})
export class EventDetailsComponent {
    event : any
    constructor (private eventService: Eventservice , private route : ActivatedRoute) {

    }

    ngOnInit(){
        this.event = this.eventService.getEvent(
            +this.route.snapshot.params['id'] 
        )
    }
}