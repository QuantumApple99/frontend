import { Component, EventEmitter, Output } from '@angular/core';
import { blog } from '../blogs.format';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-blog.component.html',
  styleUrl: './new-blog.component.css'
})
export class NewBlogComponent {
  @Output() publishBlog = new EventEmitter();
  @Output() cancelBlog = new EventEmitter();

  blogTitle: string = '';
  blogBody: string = '';

  onPublish(){
    const newBlogDetail: blog = {
      id: Math.random().toString(),
      title: this.blogTitle,
      body: this.blogBody
    }
    this.publishBlog.emit(newBlogDetail);
    this.blogTitle = '';
    this.blogBody = '';
  }

  onCancel(){
    this.cancelBlog.emit();
  }

}
