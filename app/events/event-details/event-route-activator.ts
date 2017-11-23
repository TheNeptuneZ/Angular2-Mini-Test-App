import {Router , ActivatedRouteSnapshot, CanActivate} from '@angular/router'
import {Injectable} from '@angular/core'
import {Eventservice} from '../../shared/event.service'

@Injectable()

export class EventRouteActivator implements CanActivate {
    constructor (private eventService : Eventservice, private router:Router){

    }
    canActivate(route: ActivatedRouteSnapshot ) {
      const eventExists = !!this.eventService.getEvent(+route.params['id'])
      if ( !eventExists){
        this.router.navigate(['/404'])
        }
        else {
      return eventExists
        }
    }
    
}