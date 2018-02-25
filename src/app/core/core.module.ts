import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BitbucketService } from './bitbucket.service';
import { GithubService } from './github.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [BitbucketService, GithubService]
})
export class CoreModule { }
