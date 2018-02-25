import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitRepository } from '../entity/GitRepository';
import { Commit } from '../entity/Commit';

@Injectable()
export class GithubService {
  constructor(private http: HttpClient) {}
   baseUrl = 'https://api.github.com';
   
   getRepositories() {
       return this.http.get<GitRepository[]>(`${this.baseUrl}/users/angular/repos`);
   }

   getCommits(fullName: string) {
       return this.http.get<Commit[]>(`${this.baseUrl}/repos/${fullName}/commits`);
   }
}
