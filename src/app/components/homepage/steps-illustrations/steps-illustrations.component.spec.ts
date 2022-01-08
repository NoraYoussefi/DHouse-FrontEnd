import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsIllustrationsComponent } from './steps-illustrations.component';

describe('StepsIllustrationsComponent', () => {
  let component: StepsIllustrationsComponent;
  let fixture: ComponentFixture<StepsIllustrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsIllustrationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsIllustrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
