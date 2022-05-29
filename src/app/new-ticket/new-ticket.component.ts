import { Component,OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BugListComponent } from '../sidenav-routes/bug-list/bug-list.component';
import { FormServiceService } from '../form-service.service';
import { AutoUpdateBugListService } from '../auto-update-bug-list.service';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {

  now = new Date();
  //a:number=0;
  
  // @ViewChild('f') ticket : NgForm ;

  Tickets=new FormGroup({
    subject: new FormControl(''),
    description: new FormControl(''),
    environment: new FormControl(''),
    severity: new FormControl('')
  });

  //newTicket:any[] = [];

  constructor(private dialogRef: MatDialogRef<BugListComponent>,private fservice: FormServiceService,private auto_up: AutoUpdateBugListService) { 
  }

  ngOnInit(): void {
    
  }

  notifyForChange() {
    this.auto_up.notifyAboutChange();
  }

  onSubmit() {
    console.log("submit executed");
    let Value = {...this.Tickets.value,date: this.now.toLocaleDateString()}
    // let v  = {id:++this.a, ...Value}
    this.fservice.onSubmit(Value);
    // this.auto_up.sendUpdate("submit button pressed");
    //this.bug_list.ngOnInit();
    this.notifyForChange();
    this.dialogRef.close();
  }
   
}
