import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../core/github.service';

import { GitRepository } from '../../entity/GitRepository';

@Component({
  selector: 'app-github-repo-table',
  templateUrl: './github-repo-table.component.html',
  styleUrls: ['./github-repo-table.component.css']
})
export class GithubRepoTableComponent implements OnInit {

    repositories: GitRepository[];
    displayedColumns = ['name', 'authorfullname', 'avator', 'created_at', 'view_commit'];

    constructor(private githubService: GithubService) { }

    ngOnInit() {
        this.githubService.getRepositories().subscribe(
            data => { 
                    this.repositories = data;
                }            
        );
    }
}
