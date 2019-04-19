import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-timepicker-meridian',
  templateUrl: 'event-list.component.html'
})
export class NgbdTimepickerMeridian {
  time = {hour: 13, minute: 30};
  meridian = true;

  toggleMeridian() {
      this.meridian = !this.meridian;
  }
}