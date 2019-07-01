import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraEditComponent } from './cra-edit.component';

describe('CraEditComponent', () => {
  let component: CraEditComponent;
  let fixture: ComponentFixture<CraEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
