import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListelocationsComponent } from './listelocations.component';

describe('ListelocationsComponent', () => {
  let component: ListelocationsComponent;
  let fixture: ComponentFixture<ListelocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListelocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListelocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
