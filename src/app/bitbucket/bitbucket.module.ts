import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { BitbucketRoutingModule } from './bitbucket-routing.module';
import { BitbucketTableComponent } from './bitbucket-table/bitbucket-table.component';
import { BitbucketCommitComponent } from './bitbucket-commit/bitbucket-commit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    BitbucketRoutingModule
  ],
  declarations: [BitbucketTableComponent, BitbucketCommitComponent]
})
export class BitbucketModule { }
