import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../entity/Response';
import { CommitsResponse } from '../entity/CommitsResponse';
@Injectable()
export class BitbucketService {
  constructor(private http: HttpClient) {}
   baseUrl = 'https://api.bitbucket.org/2.0';
   
   getRepositories() {
       return this.http.get<Response>(`${this.baseUrl}/repositories`);
   }

   getCommits(fullname: string) {
       return this.http.get<CommitsResponse>(`${this.baseUrl}/repositories/${fullname}/commits`);
   }
}
