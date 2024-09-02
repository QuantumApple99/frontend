import { Injectable } from "@angular/core";
import { blog } from "./blogs.format";

@Injectable({providedIn: 'root'})
export class BlogsService{
    savedBlogs: blog[] = [{ id: 'b1', title: 'Sample Title', body: 'Sample Body' }, { id: 'b2', title: 'Sample Title 2', body: 'Sample Body 2' }, { id: 'b3', title: 'Sample Title 3', body: 'Sample Body 3' }]

    addBlog(newBlog: blog){
        this.savedBlogs.push(newBlog);
    }

    removeBlog(id: string){
        this.savedBlogs = this.savedBlogs.filter((blog) => blog.id !== id)
    }
}