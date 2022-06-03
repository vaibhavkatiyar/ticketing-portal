import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BugDetailsComponent } from '../bug-details/bug-details.component';
import { EditBugDetailsService } from '../../Services/edit-bug-details.service';

@Component({
  selector: 'app-edit-bug-details',
  templateUrl: './edit-bug-details.component.html',
  styleUrls: ['./edit-bug-details.component.css']
})
export class EditBugDetailsComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<BugDetailsComponent>,private edit: EditBugDetailsService) { }

  edit_card = this.edit.edit_card;

  Tickets=new FormGroup({
    subject: new FormControl(''),
    description: new FormControl(''),
    environment: new FormControl(''),
    severity: new FormControl('')
  });

  environment = this.edit_card.environment;
  severity = this.edit_card.severity;
 
  
  ngOnInit(): void {
    console.log(this.edit_card);
  }

  onEdit(){
    
    this.edit_card.subject = this.Tickets.get('subject')?.value;
    this.edit_card.description = this.Tickets.get('description')?.value;
    this.edit_card.environment = this.Tickets.get('environment')?.value;
    this.edit_card.severity = this.Tickets.get('severity')?.value;

    let LocalStorageValue:any = localStorage.getItem("ticket_data");
    let FormValue = JSON.parse(LocalStorageValue);

    const removeIndex = FormValue.findIndex( (cardlist: { id: any; }) => cardlist.id == this.edit_card.id);

    FormValue[removeIndex]=this.edit_card;

    localStorage.setItem("ticket_data",JSON.stringify(FormValue));

    this.dialogRef.close();
}


}
