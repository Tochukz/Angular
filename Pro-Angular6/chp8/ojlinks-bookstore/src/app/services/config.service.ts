import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  bearerToken = 'eyJ0eXAi.eyJpc3MiOiJodHRwc.Xr4RyLS8peO_1S9';

  APIBaseUrl = 'http://ojlinks-api.test:8084/api';

  constructor() { }
}
