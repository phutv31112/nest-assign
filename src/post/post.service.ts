import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import PostEntity from '../entities/post.entity/post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post-dto/create-post-dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postsRepository: Repository<PostEntity>,
  ) {}

  getAllPosts() {
    return this.postsRepository.find();
  }
  async createPost(post: CreatePostDto) {
    const newPost = await this.postsRepository.create(post);
    await this.postsRepository.save(newPost);
    return newPost;
  }
}
