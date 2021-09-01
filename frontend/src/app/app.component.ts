import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'posts';
  ngOnInit() {
    $(window).on('load', function(event) {
      $('.preloader').delay(500).fadeOut(500);
  });
  }
}


