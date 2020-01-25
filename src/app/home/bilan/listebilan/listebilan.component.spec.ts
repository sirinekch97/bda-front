import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListebilanComponent } from './listebilan.component';

describe('ListebilanComponent', () => {
  let component: ListebilanComponent;
  let fixture: ComponentFixture<ListebilanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListebilanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListebilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
