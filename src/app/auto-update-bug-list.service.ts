import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoUpdateBugListService {

  private subjectName = new Subject<any>();

  constructor() { }

  sendUpdate(message : string){
    this.subjectName.next({ text: message }); 
  }

  getUpdate(): Observable<any> { //the receiver component calls this function 
    return this.subjectName.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
}
}
