import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrashCardsService {

  formData:any[]=[];

  constructor() { }


  onSubmit(value:any)
  {
    let LocalStorageValue:any = localStorage.getItem("trash_data");
    console.log(LocalStorageValue);

    if(LocalStorageValue!==null)
    {
      let FormValue = JSON.parse(LocalStorageValue)

      if(FormValue.length>1)
      {
          this.formData = FormValue
          this.formData.push(value)
          localStorage.setItem("trash_data",JSON.stringify(this.formData));
      }
      else
      {
        this.formData.push(FormValue)
        this.formData.push(value)
        localStorage.setItem("trash_data",JSON.stringify(this.formData));
        this.formData = []
        
      }
    }
    else
    {
      localStorage.setItem("trash_data",JSON.stringify(value));
      
    }
  }


  fetchValuesFromLocalStorage()
  {
    let arrayofValues:any=[]
    let LocalStorageValuetodisplay:any = localStorage.getItem("trash_data");

    if(LocalStorageValuetodisplay!==null)
    {
      let FormValue = JSON.parse(LocalStorageValuetodisplay)
      
      if(FormValue.length>1)
      {
          for (let index = 0; index < FormValue.length; index++) {
            arrayofValues.push(FormValue[index]) 
          }       
      }
      else
      {
        arrayofValues = FormValue
      }    
      return arrayofValues
    }


}
}
