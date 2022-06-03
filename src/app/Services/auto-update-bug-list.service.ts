import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoUpdateBugListService {
  subjectNotifier: Subject<null> = new Subject<null>();
  

  constructor() { }

  notifyAboutChange() {
    this.subjectNotifier.next(null);
  }
}

