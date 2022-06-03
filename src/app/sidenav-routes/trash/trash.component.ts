import { Component, OnInit } from '@angular/core';
import { FormServiceService } from 'src/app/Services/form-service.service';
import { TrashCardsService } from 'src/app/Services/trash-cards.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  trashCards:Array<any>=[];;

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

  constructor(private tservice: TrashCardsService,private fservice: FormServiceService) { }

  ngOnInit(): void {
    let z  = this.tservice.fetchValuesFromLocalStorage()
    if(z!== undefined)
    {
      if(z.length>1)
      {
        this.trashCards = z
        console.log(this.trashCards)  
      }
      else
      {
        this.trashCards.push(z)
        console.log(this.trashCards)
      }
    }
    }

    restore(card:any)
    {
    let LocalStorageValue:any = localStorage.getItem("trash_data");
    let FormValue = JSON.parse(LocalStorageValue)
    const removeIndex = FormValue.findIndex( (cardlist: { id: any; }) => cardlist.id == card.id);
    console.log(removeIndex);
    FormValue.splice( removeIndex, 1 );
    console.log(FormValue)
    localStorage.setItem("trash_data",JSON.stringify(FormValue));

    this.fservice.onSubmit(card);

    this.ngOnInit();


    }
}

