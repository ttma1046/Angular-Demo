import { Component, OnInit } from '@angular/core';
import { BitbucketService } from '../../core/bitbucket.service';

import { Repository } from '../../entity/Repository';

@Component({
    selector: 'app-bitbucket-table',
    templateUrl: './bitbucket-table.component.html',
    styleUrls: ['./bitbucket-table.component.css']
})
export class BitbucketTableComponent implements OnInit {
    repositories: Repository[];

    constructor(private bitbucketService: BitbucketService) { }

    ngOnInit() {
        this.bitbucketService.getRepositories().subscribe(
            data => { 
                    this.repositories = data.values;
                }            
        );
    }
}
