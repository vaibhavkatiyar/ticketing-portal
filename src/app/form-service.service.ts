import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  formData:any[]=[];

  constructor() { }

  onSubmit(value:any)
  {
    let LocalStorageValue:any = localStorage.getItem("ticket_data");
    console.log(LocalStorageValue);

    if(LocalStorageValue!==null)
    {
      const LocalStorageValue:any = localStorage.getItem("ticket_data")
      let FormValue = JSON.parse(LocalStorageValue)

      if(FormValue.length>1)
      {
          this.formData.push(value)
          localStorage.setItem("ticket_data",JSON.stringify(this.formData));
      }
      else
      {
        this.formData.push(FormValue)
        this.formData.push(value)
        localStorage.setItem("ticket_data",JSON.stringify(this.formData));
      }
    }
    else
    {
      localStorage.setItem("ticket_data",JSON.stringify(value));
    }
  }
}
