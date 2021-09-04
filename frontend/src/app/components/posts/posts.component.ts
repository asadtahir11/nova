import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { Router } from "@angular/router";

import { PostService } from "src/app/services/post.service";
import { AuthService } from "src/app/services/auth.service";
import { AdminService } from "src/app/services/admin.service"; 

import { Post } from "src/app/models/Post";
import { User } from "src/app/models/User";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;
  userId: Pick<User, "id">;
  userRole: string;
  postId: Pick<Post, "id">;
  assad;
  postsfiltrer;

  constructor(
    private postService: PostService,
    private authService: AuthService,
    private adminService: AdminService,
    private router : Router,
    ) {}
    
    ngOnInit(): void {
  
      this.posts$ = this.fetchAll();
      this.userId = this.authService.userId;
      this.userRole = "basic";
      this.assad = 36;
      this.postsfiltrer = this.posts$
    }

    fetchAll(): Observable<Post[]> {
      return this.postService.fetchAll();
    }


    
    createPost(): void {
      this.posts$ = this.fetchAll();
    }
  
    
  delete(postId): void {
    this.postService
      .deletePost(postId)
      .subscribe(() => (this.posts$ = this.fetchAll()));
  }

  onSelect(post) {
      this.router.navigate(['/posts', post.id ]);
  };

  update(post) {
    this.router.navigate(['/posts/update', post.id ]);
};
  
}
