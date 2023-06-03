import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherpanelComponent } from './teacherpanel.component';

describe('TeacherpanelComponent', () => {
  let component: TeacherpanelComponent;
  let fixture: ComponentFixture<TeacherpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
