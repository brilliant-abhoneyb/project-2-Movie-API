import { Component, inject, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})

export class PostComponent implements OnInit {

  private postService = inject(PostService);
  posts: any = [];

  ngOnInit(): void{
    this.loadPosts();
  }

  loadPosts(){
    this.postService.getPosts().subscribe({
      next:(posts:any) =>{
        this.posts = posts;
        console.log('Posts fetched successfully');
      },
      error: (error) => console.log('Error fetching posts:', error)
    });
  }
}
