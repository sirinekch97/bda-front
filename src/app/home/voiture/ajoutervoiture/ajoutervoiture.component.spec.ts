import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutervoitureComponent } from './ajoutervoiture.component';

describe('AjoutervoitureComponent', () => {
  let component: AjoutervoitureComponent;
  let fixture: ComponentFixture<AjoutervoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutervoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutervoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
