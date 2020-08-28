import { TestBed } from '@angular/core/testing';

import { ItemdetailsGuard } from './itemdetails.guard';

describe('ItemdetailsGuard', () => {
  let guard: ItemdetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ItemdetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
