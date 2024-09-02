import { Component, inject } from '@angular/core';
import { NewBlogComponent } from '../new-blog/new-blog.component';
import { BlogViewComponent } from '../blog-view/blog-view.component';
import { blog } from '../blogs.format';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-logged-in-body',
  standalone: true,
  imports: [NewBlogComponent, BlogViewComponent],
  templateUrl: './logged-in-body.component.html',
  styleUrl: './logged-in-body.component.css'
})
export class LoggedInBodyComponent {
  addNewBlog: boolean = false;
  private blogService = inject(BlogsService)

  onAddClick(){
    this.addNewBlog = true
  }

  publishBlog(newBlogData: blog){
    this.blogService.addBlog(newBlogData)
  }

  cancelBlog(){
    this.addNewBlog = false
  }
}
