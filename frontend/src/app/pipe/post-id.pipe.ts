import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postId'
})
export class PostIdPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
