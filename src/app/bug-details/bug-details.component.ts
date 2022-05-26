import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { NewTicketComponent } from '../new-ticket/new-ticket.component';

@Component({
  selector: 'app-bug-details',
  templateUrl: './bug-details.component.html',
  styleUrls: ['./bug-details.component.css']
})
export class BugDetailsComponent implements OnInit {
  ticketArray:any=[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchTicket();
    console.log(this.ticketArray);
  }
  private fetchTicket(){
    this.ticketArray.push();

    // this.http.get('https://ticketing-portal-cf2c1-default-rtdb.firebaseio.com/bug_details.json')
    // .subscribe(bug_details =>{
      
    //   this.ticketArray.push(bug_details);
    // });
  }
  

}
