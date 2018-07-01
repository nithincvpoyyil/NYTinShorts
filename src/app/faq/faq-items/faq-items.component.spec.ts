import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqItemsComponent } from './faq-items.component';

describe('FaqItemsComponent', () => {
  let component: FaqItemsComponent;
  let fixture: ComponentFixture<FaqItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
