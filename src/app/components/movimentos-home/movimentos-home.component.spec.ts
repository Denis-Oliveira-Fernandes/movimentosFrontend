import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentosHomeComponent } from './movimentos-home.component';

describe('MovimentosHomeComponent', () => {
  let component: MovimentosHomeComponent;
  let fixture: ComponentFixture<MovimentosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentosHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
