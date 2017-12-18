
import { Component, OnInit, NgModule } from '@angular/core'; // imports core methods

// Add a component annotation so that the application can detect it as one
@Component ({
    selector: 'app-error', // this is the tag for the component when you want to call it
    templateUrl: './error.component.html', // this is the html for the ts to look for
    styleUrls: ['./error.component.css'] // identifies the styles to be imported to the html
})
// Creates the class
export class ErrorComponent {

}
