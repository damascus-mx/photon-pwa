import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }

  // App loading
  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      // Insert code here
      console.log('At loader');
      resolve(true);
    });
  }
}
