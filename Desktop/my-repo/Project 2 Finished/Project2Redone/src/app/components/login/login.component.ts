
import { Component, OnInit, NgModule } from '@angular/core'; // imports core methods
import { User } from '../entities/User';
import { LoginService } from '../../services/login/login.service';

// Add a component annotation so that the application can detect it as one
@Component ({
    selector: 'app-login', // this is the tag for the component when you want to call it
    templateUrl: './login.component.html', // this is the html for the ts to look for
    styleUrls: ['./login.component.css'] // identifies the styles to be imported to the html
})
// Creates the class
export class LoginComponent implements OnInit {

    // Declare the user and service objects
    u: User;

    constructor (
        private ls: LoginService
    ) {}
    // called after the constructor
    ngOnInit() {
        // initialize the user and service objects
        this.u = new User();
    }

    login() {
        console.log(this.u.username + '  in ts');
        this.ls.loginService(this.u).subscribe();
    }
}
