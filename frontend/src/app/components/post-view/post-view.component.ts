import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { PostService } from "src/app/services/post.service";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {
  
   post$: Observable<Post[]>;
   public number;

   
  constructor(
    private route : ActivatedRoute,
    private postService: PostService
    ) { }

  ngOnInit(): void {
    let id = parseInt (this.route.snapshot.paramMap.get('id'));
    this.number = id;
    this.post$ = this.fetchOne(this.number);
  }

  fetchOne(number): Observable<Post[]> {
    return this.postService.fetchOne(number);  
  }

}
