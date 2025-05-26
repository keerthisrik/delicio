import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssortedboxesComponent } from './assortedboxes.component';

describe('AssortedboxesComponent', () => {
  let component: AssortedboxesComponent;
  let fixture: ComponentFixture<AssortedboxesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssortedboxesComponent]
    });
    fixture = TestBed.createComponent(AssortedboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
