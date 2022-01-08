import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelAnnoncesComponent } from './nouvel-annonces.component';

describe('NouvelAnnoncesComponent', () => {
  let component: NouvelAnnoncesComponent;
  let fixture: ComponentFixture<NouvelAnnoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelAnnoncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
