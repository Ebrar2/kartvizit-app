import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSearch } from './card-search';

describe('CardSearch', () => {
  let component: CardSearch;
  let fixture: ComponentFixture<CardSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
