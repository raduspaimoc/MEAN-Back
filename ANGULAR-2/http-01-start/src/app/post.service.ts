import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostService {
    
    constructor(private http: HttpClient){}

    createAndStorePost(title: string, content: string){
        const postData: Post = {title: title, content: content};
        this.http.post<{ name: string }>(
            'https://ng-complete-guide-5f5cb.firebaseio.com/posts.json', 
            postData
          ).subscribe(posts => {
            
          });
    }

    fetchPosts(){
        return this.http
            .get('https://ng-complete-guide-5f5cb.firebaseio.com/posts.json')
            .pipe(map((responseData: {[key: string]: Post }) => {
                const postsArray: Post[] = [];
                for(const key in responseData){
                    if(responseData.hasOwnProperty(key)){
                    postsArray.push({...responseData[key], id: key});
                    }        
                }
                return postsArray;
            }));
    }


}