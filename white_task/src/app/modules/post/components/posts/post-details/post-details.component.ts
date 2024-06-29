import { NgOptimizedImage } from '@angular/common';
import { Component, DestroyRef, effect, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { HttpService } from '@app/core/services/http.service';
import { IComment } from '@app/modules/post/models/comment.model';
import { IPost } from '@app/modules/post/models/post.model';
import { IUser } from '@app/modules/post/models/user.model';
import { SpinnerLoadingComponent } from '@app/shared/components/spinner-loading/spinner-loading.component';
import { ISinglePayload } from '@app/shared/models/payload.model';
import { finalize } from 'rxjs/internal/operators/finalize';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [
    MatCardModule,
    RouterLink,
    MatIconModule,
    SpinnerLoadingComponent,
    NgOptimizedImage,
  ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
})
export class PostDetailsComponent {
  id = input.required<number>();
  private _http: HttpService = inject(HttpService);
  destroyRef: DestroyRef = inject(DestroyRef);
  isLoading!: boolean;
  post: IPost = {};
  user?: IUser;
  comments: IComment[] = [];
  constructor() {
    effect(() => {
      if (this.id()) {
        this.getPostDetails();
      }
    });
  }
  getPostDetails() {
    this.isLoading = true;
    this._http
      .getItemById(this.id(), 'posts')
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => (this.isLoading = false))
      )
      .subscribe({
        next: (response: IPost) => {
          this.onSuccess(response);
        },
        error: (error: Error) => {},
      });
  }
  onSuccess(response: IPost) {
    this.post = response;
    this.getUserDetails();
    this.getAllComments();
  }
  getAllComments() {
    this.isLoading = true;
    this._http
      .getAll({}, 'comments')
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => (this.isLoading = false))
      )
      .subscribe({
        next: (response: IComment[]) => {
          this.comments = response.filter((m) => {
            return m.postId == this.id();
          });
        },
        error: (error: Error) => {},
      });
  }
  getUserDetails() {
    this.isLoading = true;
    this._http
      .getItemById(this.post.userId!, 'users')
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => (this.isLoading = false))
      )
      .subscribe({
        next: (response: IUser) => {
          this.user = response;
        },
        error: (error: Error) => {},
      });
  }
}
