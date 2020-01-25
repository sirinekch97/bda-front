import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVoitureComponent } from './listevoiture.component';

describe('ListeVoitureComponent', () => {
  let component: ListeVoitureComponent;
  let fixture: ComponentFixture<ListeVoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeVoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
