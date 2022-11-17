import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenPgeComponent } from './women-pge.component';

describe('WomenPgeComponent', () => {
  let component: WomenPgeComponent;
  let fixture: ComponentFixture<WomenPgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenPgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenPgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
