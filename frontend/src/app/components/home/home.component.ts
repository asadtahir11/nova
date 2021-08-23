import { Component, OnInit } from '@angular/core';  

import { Post } from "src/app/models/Post";
import { User } from "src/app/models/User";


import { Observable } from "rxjs";

import { PostService } from "src/app/services/post.service";
import { AuthService } from "src/app/services/auth.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts$: Observable<Post[]>;
  userId: Pick<User, "id">;
  quote: string;



  constructor(
    private postService: PostService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.posts$ = this.fetchAll();
    this.userId = this.authService.userId;

  }

  fetchAll(): Observable<Post[]> {
    return this.postService.fetchAll();
  }


}
