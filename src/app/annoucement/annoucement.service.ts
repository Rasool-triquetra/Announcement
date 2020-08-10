import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AnnoucementService {
  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Bearer-Token':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVwdGVzdEBlbWFpbC5jb20iLCJlbXBsb3llZV9pZCI6IkRPQzE3NDgyIiwiaWF0IjoxNTk2OTE1NzU5LCJleHAiOjE1OTcwMDIxNTl9.BrllVmwCJzkVJpUZU-imjn8KTc65_aG6un7gGXKt3vA',
      client_id: 'mass_announcement_poc',
    }),
  };
  constructor(private http: HttpClient) {}

  sendEmail(message) {
    let body = {
      from: 'admin@triquetra.in',

      subject: 'Testing email',
      text: message,
      html: message,
    };
    return this.http.post<any>(
      `https://trias.triquetra.in/engagement/communication/sendbulksms`,
      body,
      this.options
    );
  }

  sendSms(message) {
    return this.http.post<any>(
      `https://trias.triquetra.in/engagement/communication/sendbulksms`,
      { msg: message },
      this.options
    );
  }
}
