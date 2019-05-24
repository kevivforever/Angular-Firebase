import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router} from '@angular/router';

@Injectable()
export class AuthService {

  authState: any = null;

  constructor(private afAuth: AngularFireAuth,
              private afdb: AngularFireDatabase,
              private router: Router) {

    this.afAuth.authState.subscribe((auth) => {
      console.log('afauth authstate', auth);
      this.authState = auth;
    });
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  adminLogin(email: string, password: string) {
     return this.afAuth.auth.signInWithEmailAndPassword(email, password)
       .then((user) => {
         this.authState = user
         console.log('adminLogin login is successful');
         this.router.navigateByUrl('/admin/dashboard');
       })
       .catch(error => console.log(error.message));
  }

  //// Sign Out ////
  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

}

export class EmailPasswordCredentials {
  email: string;
  password: string;
}
