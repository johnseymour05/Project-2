import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { User } from '../../components/entities/User';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import '../../environments/environment'
import { environment } from '../../environments/environment';




@Injectable()
export class LoginService implements OnInit {


    constructor(
        private http: Http,
        private rt: Router,
    ) { }
    ngOnInit() {
    }

    // Make a request to the server to check user credentials
    loginService(u: User) {
        console.log(u.username + ' in service');
        return this.http.post('http://localhost:8080/SprApp/users/login', u)
        .map((resp: Response) => {
            let returnedUser = resp.json();
            if (returnedUser) {
                sessionStorage.setItem('currentUser', JSON.stringify(returnedUser));
                console.log('login successful');
                this.rt.navigate(['/userpanel']);
            }
            if (!returnedUser) {
                console.log('failed to login');
                this.rt.navigate(['/error']);
            }
        });
    }
}
