import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScormPanelComponent } from './scorm-panel.component';

describe('ScormPanelComponent', () => {
  let component: ScormPanelComponent;
  let fixture: ComponentFixture<ScormPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScormPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScormPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
