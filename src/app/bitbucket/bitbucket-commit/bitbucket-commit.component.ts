import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { BitbucketService } from '../../core/bitbucket.service';

import { Commit } from '../../entity/Commit';

@Component({
    selector: 'app-bitbucket-commit',
    templateUrl: './bitbucket-commit.component.html',
    styleUrls: ['./bitbucket-commit.component.css']
})
export class BitbucketCommitComponent implements OnInit {
    commits: Commit[];

    constructor(private route: ActivatedRoute, private router: Router, private bitbucketService: BitbucketService) { }

    ngOnInit() {
        this.route.paramMap.switchMap((params: ParamMap) => 
        this.bitbucketService.getCommits(params.get('full_name')))
        .subscribe(
            data => {
                this.commits = data.values;
            }
        )
    }
}
