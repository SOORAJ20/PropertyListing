import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDeatilComponent } from './listing-deatil.component';

describe('ListingDeatilComponent', () => {
  let component: ListingDeatilComponent;
  let fixture: ComponentFixture<ListingDeatilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingDeatilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
