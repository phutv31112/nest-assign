import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post-dto/create-post-dto';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}
  @Get('')
  getListPost() {
    return this.postService.getAllPosts();
  }
  @Post('create')
  createPost(@Body() data: CreatePostDto) {
    return this.postService.createPost(data);
  }
}
