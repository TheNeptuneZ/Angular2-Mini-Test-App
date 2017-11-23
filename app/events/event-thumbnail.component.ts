import {Component, Input , Output, EventEmitter} from '@angular/core'
import { PropertyBindingType } from '@angular/compiler';
@Component({
selector: 'event-thumbnail',
template:`

<div>

<div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
<div> Nom : {{event?.name}}</div>
<div> date : {{event?.date}}</div>
<div> Heure : {{event?.time}}</div>

<div [ngSwitch]="event?.time">
<span *ngSwitchCase="'8:00 am'">Demarrage en avance </span>
<span *ngSwitchCase="'10:00 am'">Demarrage en retard </span>
<span *ngSwitchDefault>Demarrage normal</span> 
</div>


<div> Prix : {{event?.price}} DH</div>
<div>

<div *ngIf="event?.location">
<span> Adresse : {{event?.location?.adress}}</span>
<span>&nbsp;</span>
<span>{{event?.location.city}},{{event?.location.country}}</span>
</div>


<div *ngFor="let session of event.sessions" >


<span> Session ID  : {{session.id}}</span>




</div>


</div>


</div>
</div>
` ,
styles :[`
.well div {color:#f89406;}
`
]

})
export class EventThumbnailComponent{
@Input() event:any
@Output() eventClick = new EventEmitter()

handleClickMe(){
    this.eventClick.emit('Teste++++')
    }


}


    