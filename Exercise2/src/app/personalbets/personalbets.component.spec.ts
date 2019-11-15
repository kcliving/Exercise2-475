import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalbetsComponent } from './personalbets.component';

describe('PersonalbetsComponent', () => {
  let component: PersonalbetsComponent;
  let fixture: ComponentFixture<PersonalbetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalbetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalbetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
