import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McqPaperComponent } from './mcq-paper.component';

describe('McqPaperComponent', () => {
  let component: McqPaperComponent;
  let fixture: ComponentFixture<McqPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McqPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McqPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
