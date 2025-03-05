import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCdComponent } from './new-cd.component';

describe('NewCdComponent', () => {
  let component: NewCdComponent;
  let fixture: ComponentFixture<NewCdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewCdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
