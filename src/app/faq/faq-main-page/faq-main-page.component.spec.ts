import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqMainPageComponent } from './faq-main-page.component';

describe('FaqMainPageComponent', () => {
  let component: FaqMainPageComponent;
  let fixture: ComponentFixture<FaqMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
