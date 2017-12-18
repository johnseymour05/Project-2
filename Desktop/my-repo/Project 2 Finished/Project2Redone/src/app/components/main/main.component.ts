
import { Component, OnInit, NgModule } from '@angular/core'; // imports core methods

// Add a component annotation so that the application can detect it as one
@Component ({
    selector: 'app-main', // this is the tag for the component when you want to call it
    templateUrl: './main.component.html', // this is the html for the ts to look for
    styleUrls: ['./main.component.css'] // identifies the styles to be imported to the html
})
// Creates the class
export class MainComponent {

}
