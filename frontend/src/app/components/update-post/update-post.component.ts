import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from "@angular/core";
import { FormControl, FormGroup, Validators, NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { first } from "rxjs/operators";

import { Post } from "src/app/models/Post";

import { AuthService } from "src/app/services/auth.service";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {

  @ViewChild("formDirective") formDirective: NgForm;
  @Output() create: EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  public number;
  
  isOpen = false;

  constructor(
    private route : ActivatedRoute,
    private authService: AuthService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.form = this.createFormGroup();
    let id = parseInt (this.route.snapshot.paramMap.get('id'));
    this.number = id;
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      title: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
      ]),
      body: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onSubmit(number , formData: Pick<Post, "title" | "body">): void {
    this.postService
      .updatePost(number , formData)
      .pipe(first())
      .subscribe(() => {
        this.create.emit(null);
      });
    this.form.reset();
    this.formDirective.resetForm();
  }

}
