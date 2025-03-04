import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCdComponent } from './list-cd.component';

describe('ListCdComponent', () => {
  let component: ListCdComponent;
  let fixture: ComponentFixture<ListCdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
