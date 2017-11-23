import {Component, OnInit} from '@angular/core'
import { Eventservice } from '../shared/event.service';
import {ToastrService} from '../common/toastr.service'

@Component ({
    selector :'events-list' ,
    template:`
    <div>
    <h1>Création de 1er application avec Angular2</h1>
    <br/>
    <div class="row">
    <div *ngFor="let event of events" class="col-md-6">
    <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"> 


    


    </event-thumbnail>
    </div>
    </div>
    </div>
    
    `
    
})


export class EventListComponent{

   events : any []

   constructor (private eventService: Eventservice , private toastr:ToastrService){
    
}

        
   ngOnInit(){
       this.events = this.eventService.getEvents() 
   }

    handleThumbnailClick(eventName){
        this.toastr.success(eventName)
    }       

}