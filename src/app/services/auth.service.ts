import { Injectable } from '@angular/core';
import { AuthModule } from '@angular/fire/auth';
import { Route } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$?: Observable<User>;
  constructor(private auth: Auth) {

    this.auth.currentUser?.isAnonymous

    }
}
