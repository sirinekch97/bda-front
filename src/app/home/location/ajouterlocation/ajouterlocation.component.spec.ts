import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterlocationComponent } from './ajouterlocation.component';

describe('AjouterlocationComponent', () => {
  let component: AjouterlocationComponent;
  let fixture: ComponentFixture<AjouterlocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterlocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
