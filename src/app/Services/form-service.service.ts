import { Injectable } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';

@Injectable({
  providedIn: 'root'
})

export class FormServiceService {

  formData:any[]=[];

  id=0;

  constructor() { }

  onSubmit(value:any)
  {
    if(value.id==null)
    {
      value={...value,id:this.id++}
    }
    let LocalStorageValue:any = localStorage.getItem("ticket_data");
    console.log(LocalStorageValue);

    if(LocalStorageValue!==null)
    {
      let FormValue = JSON.parse(LocalStorageValue)

      if(FormValue.length>1)
      {
          this.formData = FormValue
          this.formData.push(value)
          localStorage.setItem("ticket_data",JSON.stringify(this.formData));
      }
      else
      {
        this.formData.push(FormValue)
        this.formData.push(value)
        localStorage.setItem("ticket_data",JSON.stringify(this.formData));
        this.formData = []
        
      }
    }
    else
    {
      localStorage.setItem("ticket_data",JSON.stringify(value));
      
    }
  }

  fetchValuesFromLocalStorage()
  {
    let arrayofValues:any=[]
    let LocalStorageValuetodisplay:any = localStorage.getItem("ticket_data");

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
