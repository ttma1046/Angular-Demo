import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BitbucketCommitComponent } from './bitbucket-commit/bitbucket-commit.component';
import { BitbucketTableComponent } from './bitbucket-table/bitbucket-table.component';
const bitbucketRoutes: Routes = [
  { path: 'repos',  component: BitbucketTableComponent },
  { path: 'commits/:full_name', component: BitbucketCommitComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(bitbucketRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BitbucketRoutingModule { }