import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BugListComponent } from '../sidenav-routes/bug-list/bug-list.component';
import { FormServiceService } from '../form-service.service';


@Component({
  selector: 'app-bug-details',
  templateUrl: './bug-details.component.html',
  styleUrls: ['./bug-details.component.css']
})
export class BugDetailsComponent implements OnInit {

  ticketId:any;
  cardDisplayDetails:Array<any>=[];

   constructor(private route: ActivatedRoute,private fservice: FormServiceService) {
    
   }

  ngOnInit(): void {

    let z  = this.fservice.fetchValuesFromLocalStorage()
    if(z!== undefined)
    {
      if(z.length>1)
      {
        this.cardDisplayDetails = z  
      }
      else
      {
        this.cardDisplayDetails.push(z)
      }
    }

    this.ticketId = this.route.snapshot.paramMap.get('id');
    console.log(this.ticketId);
  }
  

}
