import { Component, inject } from '@angular/core';
import { BlogsService } from '../blogs.service';
import { blog } from '../blogs.format';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-blog-view',
  standalone: true,
  imports: [BlogComponent],
  templateUrl: './blog-view.component.html',
  styleUrl: './blog-view.component.css'
})
export class BlogViewComponent {
  private blogsService = inject(BlogsService)
  blogs: blog[] = this.blogsService.savedBlogs

  onRemove(id: string){
    this.blogsService.removeBlog(id);
    this.blogs = this.blogsService.savedBlogs;
  }

}
