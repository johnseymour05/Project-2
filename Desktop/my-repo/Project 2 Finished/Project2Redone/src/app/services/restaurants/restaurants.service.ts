import { OnInit, Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Restaurant } from "../../components/entities/Restaurant";

@Injectable()
export class RestaurantService {

    constructor(
        private http: Http,
    ) {}

    getAllRestaurants() {
        return this.http.get('http://localhost:8080/SprApp/restaurants/all')
        .map((resp) => {
            let returnedRestaurants = resp.json();
            if (returnedRestaurants) {
                sessionStorage.setItem('allRestaurants', JSON.stringify(returnedRestaurants));
                console.log('restaurants successfully loaded');
            }
            if (!returnedRestaurants) {
                console.log('failed to load restaurants');
            }
        });
    }
}


// loginService(u: User) {
//     console.log(u.username + ' in service');
//     return this.http.post('http://localhost:8080/SprApp/users/login', u)
//     .map((resp: Response) => {
//         let returnedUser = resp.json();
//         if (returnedUser) {
//             sessionStorage.setItem('currentUser', JSON.stringify(returnedUser));
//             console.log('login successful');
//             this.rt.navigate(['/userpanel']);
//         }
//         if (!returnedUser) {
//             console.log('failed to login');
//             this.rt.navigate(['/error']);
//         }
//     });
// }