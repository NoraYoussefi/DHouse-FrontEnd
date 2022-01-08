import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPropComponent } from './upload-prop.component';

describe('UploadPropComponent', () => {
  let component: UploadPropComponent;
  let fixture: ComponentFixture<UploadPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
