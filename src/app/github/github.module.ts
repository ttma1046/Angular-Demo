import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { GithubRoutingModule } from './github-routing.module';
import { GithubRepoTableComponent } from './github-repo-table/github-repo-table.component';
import { GithubRepoCommitComponent } from './github-repo-commit/github-repo-commit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    GithubRoutingModule
  ],
  declarations: [ GithubRepoTableComponent, GithubRepoCommitComponent ]
})
export class GithubModule { }
