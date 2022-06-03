import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBugDetailsComponent } from './edit-bug-details.component';

describe('EditBugDetailsComponent', () => {
  let component: EditBugDetailsComponent;
  let fixture: ComponentFixture<EditBugDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBugDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBugDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
