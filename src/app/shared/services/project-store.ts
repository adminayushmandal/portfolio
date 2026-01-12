import {Injectable, resource} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Octokit, RestEndpointMethodTypes} from '@octokit/rest';

export type Repository = RestEndpointMethodTypes['repos']['listForUser']['response']['data']

@Injectable({
  providedIn: 'root',
})
export class ProjectStore {

  public repositories = resource<Repository, unknown>({
    defaultValue: [],
    loader: async () => {
      const octokit = new Octokit({
        auth: environment.authKey,
      })

      const response = await octokit.rest
        .repos.listForUser({
          username: "Ayush2395",
        })

      return response.data;
    }
  })
}
