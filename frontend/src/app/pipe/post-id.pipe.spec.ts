import { PostIdPipe } from './post-id.pipe';

describe('PostIdPipe', () => {
  it('create an instance', () => {
    const pipe = new PostIdPipe();
    expect(pipe).toBeTruthy();
  });
});
