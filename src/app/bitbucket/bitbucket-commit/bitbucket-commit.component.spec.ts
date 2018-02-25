import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitbucketCommitComponent } from './bitbucket-commit.component';

describe('BitbucketCommitComponent', () => {
  let component: BitbucketCommitComponent;
  let fixture: ComponentFixture<BitbucketCommitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitbucketCommitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitbucketCommitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
