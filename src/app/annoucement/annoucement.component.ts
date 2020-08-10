import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { AnnoucementService } from './annoucement.service';

interface Sms {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-annoucement',
  templateUrl: './annoucement.component.html',
  styleUrls: ['./annoucement.component.scss'],
})
export class AnnoucementComponent implements OnInit {
  selectedtext;
  selectedoption;
  selectedtypedtext;

  constructor(private annoucementService: AnnoucementService) {}

  ngOnInit(): void {}

  sms: Sms[] = [
    { value: 'email', viewValue: 'Send Email' },
    { value: 'sms', viewValue: 'Send SMS' },
  ];

  send() {
    if (this.selectedoption == 'email') {
      this.annoucementService
        .sendEmail(this.selectedtypedtext)
        .subscribe((result) => {
          console.log(result);
        });
    } else if (this.selectedoption == 'sms') {
      this.annoucementService
        .sendSms(this.selectedtypedtext)
        .subscribe((result) => {
          console.log(result);
        });
    }
  }
}
