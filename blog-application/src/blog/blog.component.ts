import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { blog } from '../blogs.format';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  @Input() currentBlog!: blog
  @Output() removeBlog = new EventEmitter()

  onRemove(){
    this.removeBlog.emit(this.currentBlog.id)
  }
}
