import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormServiceService } from '../../Services/form-service.service';
import { Router } from '@angular/router';
import { TrashCardsService } from '../../Services/trash-cards.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditBugDetailsComponent } from '../edit-bug-details/edit-bug-details.component';
import { EditBugDetailsService } from '../../Services/edit-bug-details.service';


@Component({
  selector: 'app-bug-details',
  templateUrl: './bug-details.component.html',
  styleUrls: ['./bug-details.component.css']
})
export class BugDetailsComponent implements OnInit {

  trashCards:any[]=[];

  ticketId:any;
  cardDisplayDetails:Array<any>=[];

   constructor(private route: ActivatedRoute,private fservice: FormServiceService,private router: Router,private tservice: TrashCardsService,private dialog: MatDialog,private edit: EditBugDetailsService) {
    
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
  }

  movetoTrash(card:any){
    let LocalStorageValue:any = localStorage.getItem("ticket_data");
    let FormValue = JSON.parse(LocalStorageValue)
    const removeIndex = FormValue.findIndex( (card: { id: any; }) => card.id == this.ticketId);
    console.log(removeIndex);

    FormValue.splice( removeIndex, 1 );
    console.log(FormValue)
    localStorage.setItem("ticket_data",JSON.stringify(FormValue));

    this.tservice.onSubmit(card);
    console.log(card);
    this.router.navigate(['side_routes/trash']);
  }

  openDialog(card:any){

    this.edit.edit_card=card;


    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.dialog.open(EditBugDetailsComponent, dialogConfig);
    
  }

}
