"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var EventThumbnailComponent = (function () {
    function EventThumbnailComponent() {
        this.eventClick = new core_1.EventEmitter();
    }
    EventThumbnailComponent.prototype.handleClickMe = function () {
        this.eventClick.emit('Teste++++');
    };
    return EventThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EventThumbnailComponent.prototype, "event", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EventThumbnailComponent.prototype, "eventClick", void 0);
EventThumbnailComponent = __decorate([
    core_1.Component({
        selector: 'event-thumbnail',
        template: "\n\n<div>\n\n<div [routerLink]=\"['/events',event.id]\" class=\"well hoverwell thumbnail\">\n<div> Nom : {{event?.name}}</div>\n<div> date : {{event?.date}}</div>\n<div> Heure : {{event?.time}}</div>\n\n<div [ngSwitch]=\"event?.time\">\n<span *ngSwitchCase=\"'8:00 am'\">Demarrage en avance </span>\n<span *ngSwitchCase=\"'10:00 am'\">Demarrage en retard </span>\n<span *ngSwitchDefault>Demarrage normal</span> \n</div>\n\n\n<div> Prix : {{event?.price}} DH</div>\n<div>\n\n<div *ngIf=\"event?.location\">\n<span> Adresse : {{event?.location?.adress}}</span>\n<span>&nbsp;</span>\n<span>{{event?.location.city}},{{event?.location.country}}</span>\n</div>\n\n\n<div *ngFor=\"let session of event.sessions\" >\n\n\n<span> Session ID  : {{session.id}}</span>\n\n\n\n\n</div>\n\n\n</div>\n\n\n</div>\n</div>\n",
        styles: ["\n.well div {color:#f89406;}\n"
        ]
    }),
    __metadata("design:paramtypes", [])
], EventThumbnailComponent);
exports.EventThumbnailComponent = EventThumbnailComponent;
//# sourceMappingURL=event-thumbnail.component.js.map