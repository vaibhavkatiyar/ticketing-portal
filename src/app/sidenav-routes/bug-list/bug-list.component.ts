import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatDialogConfig,MatDialog} from '@angular/material/dialog';
import { NewTicketComponent } from '../../components/new-ticket/new-ticket.component';
import { FormServiceService } from 'src/app/Services/form-service.service';
import { AutoUpdateBugListService } from 'src/app/Services/auto-update-bug-list.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.css']
})
export class BugListComponent implements OnInit {

  selected1 = 'None';
  selected2 = 'none';
  bold = 'bold';

  severity:any;
  filterbydate:any;
  inputId:any;


  @Output() view = new EventEmitter<number>();


  notifierSubscription: Subscription = this.auto_up.subjectNotifier.subscribe(notified => {
    this.ngOnInit();
    // originator has notified me. refresh my data here.
  });

  cardDisplay:Array<any>=[];

  currentDate = new Date();
  
  constructor(private dialog: MatDialog,private fservice: FormServiceService,private auto_up: AutoUpdateBugListService, private router: Router,) { }


  ngOnInit(): void {
    let z  = this.fservice.fetchValuesFromLocalStorage()
    if(z!== undefined)
    {
      if(z.length>1)
      {
        this.cardDisplay = z
        console.log(this.cardDisplay)
      }
      else
      {
        this.cardDisplay.push(z)
        console.log(this.cardDisplay)
      }
    }
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.dialog.open(NewTicketComponent, dialogConfig);
    
  }

  getColor(severity: any) { 
    switch (severity) {
      case 'High':
        return 'red';
      case 'Medium':
        return 'orange';
      case 'Low':
        return 'yellow';
    }
  }
  severitySelected(value:any){
     this.severity = value;
  }

  dateSelected(value:any){
      this.filterbydate=value;
      console.log(this.filterbydate);
  }

  clickcard(ticketid:number)
  {
    this.router.navigate(['/bug_details', ticketid]);
  }
  
  inputid(event:any){
    this.inputId = event.target.value;
  }
}


