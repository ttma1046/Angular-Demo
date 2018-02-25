import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitbucketTableComponent } from './bitbucket-table.component';

describe('BitbucketTableComponent', () => {
  let component: BitbucketTableComponent;
  let fixture: ComponentFixture<BitbucketTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitbucketTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitbucketTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
