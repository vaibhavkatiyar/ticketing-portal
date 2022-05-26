import { Component, OnInit } from '@angular/core';
import {MatDialogConfig,MatDialog} from '@angular/material/dialog';
import { NewTicketComponent } from '../../new-ticket/new-ticket.component';
import { FormServiceService } from 'src/app/form-service.service';
import { AutoUpdateBugListService } from 'src/app/auto-update-bug-list.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.css']
})
export class BugListComponent implements OnInit {

  selected1 = 'None';
  selected2 = 'none';
  bold = 'bold';

  messageReceived: any;
  //private subscriptionName: Subscription;

  // cardDisplay:{
  //   id:number;
  //   subject:string;
  //   description:string;
  //   environment:string;
  //   severity:string;
  //   date: string;

  // }[] | undefined;

  cardDisplay:any[]=[];

  currentDate = new Date();
  
  constructor(private dialog: MatDialog,private fservice: FormServiceService,private auto_up: AutoUpdateBugListService) { }

  ngOnInit(): void {
    const a=localStorage.getItem("ticket_data");
    
    console.log(typeof a);
    console.log(a);

    const b=JSON.parse(a || '{}');
    console.log(b);
    console.log(typeof b);
    console.log(this.cardDisplay);
    this.cardDisplay.push(...b);
    
    // this.cardDisplay.push(JSON.parse(localStorage.getItem("ticket_data") || '{}'));
    // console.log(this.cardDisplay);
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
     return value;
  }

  // updatecard(){
  //   this.cardDisplay = JSON.parse(localStorage.getItem("ticket_data") || '{}');
  //   this.ngOnInit();
  // }
  
  
}

