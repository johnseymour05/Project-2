
import { Component, OnInit, NgModule } from '@angular/core'; // imports core methods
import { User } from '../entities/User';
import { RestaurantService } from '../../services/restaurants/restaurants.service';

// Add a component annotation so that the application can detect it as one
@Component ({
    selector: 'app-userpanel', // this is the tag for the component when you want to call it
    templateUrl: './userpanel.component.html', // this is the html for the ts to look for
    styleUrls: ['./userpanel.component.css'] // identifies the styles to be imported to the html
})
// Creates the class
export class UserPanelComponent implements OnInit {

    public display = false;
    u: User;
    restaurants: any;

    constructor(
        private rs: RestaurantService,
    ) {}
    ngOnInit() {
    this.u = JSON.parse(sessionStorage.getItem('currentUser'));
    this.rs.getAllRestaurants().subscribe();
    }

    toggleRestaurants() {
        this.display = !this.display;
        console.log(this.display);
        this.restaurants = JSON.parse(sessionStorage.getItem('allRestaurants'));
        console.log(this.restaurants);
    }


}
