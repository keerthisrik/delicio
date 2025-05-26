import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularchocolatesComponent } from './popularchocolates.component';

describe('PopularchocolatesComponent', () => {
  let component: PopularchocolatesComponent;
  let fixture: ComponentFixture<PopularchocolatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularchocolatesComponent]
    });
    fixture = TestBed.createComponent(PopularchocolatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
