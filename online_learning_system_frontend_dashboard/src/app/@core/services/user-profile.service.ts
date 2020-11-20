import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user-model';
import { LocalStorageService } from './local-storage.service';
import { publishReplay, refCount, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserProfileService {
  private static get_users = '/api/v1/users';
  public userProfile: Observable<User>;
  private static retry_count = 2;

  constructor(private http: HttpClient,
              private router: Router,
              private localStorageService: LocalStorageService,
              private angularFireAuth: AngularFireAuth) {
  }

  public getUser(userEmail: string): Observable<User> {
    this.userProfile = this.http.post<User>(`${environment.baseUrl}${UserProfileService.get_users}`, {email: userEmail}).pipe(
      retry(UserProfileService.retry_count),
      publishReplay(1),
      refCount()
    );
    return this.userProfile;
  }

  public logout(): void {
    this.localStorageService.deleteData('auth_token');
    this.localStorageService.deleteData('email');
    this.localStorageService.deleteData('user');
    this.angularFireAuth.auth.signOut();
    this.userProfile = null;
    this.router.navigate(['/login']);
  }
}
