import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
import { Subject, throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {

    error = new Subject<string>();
    
    constructor(private http: HttpClient){}

    createAndStorePost(title: string, content: string){
        const postData: Post = {title: title, content: content};
        this.http.post<{ name: string }>(
            'https://ng-complete-guide-5f5cb.firebaseio.com/posts.json', 
            postData,
            {
                observe: 'response'
            }
          ).subscribe(posts => {
            console.log(posts);
          }, error => {
            this.error.next(error.message);
          });
    }

    fetchPosts(){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty'); 
        searchParams = searchParams.append('savager', 'sauce'); 
        return this.http
            .get('https://ng-complete-guide-5f5cb.firebaseio.com/posts.json',
            {
                headers: new HttpHeaders({'Custom-Header': 'Hello'}),
                params: searchParams,
                responseType: 'json'
            })
            .pipe(map((responseData: {[key: string]: Post }) => {
                const postsArray: Post[] = [];
                for(const key in responseData){
                    if(responseData.hasOwnProperty(key)){
                    postsArray.push({...responseData[key], id: key});
                    }        
                }
                return postsArray;
            }),
            catchError(errorResponse => {
                return throwError(errorResponse);
            })
        );
    }

    deletePosts(){
        return this.http.delete('https://ng-complete-guide-5f5cb.firebaseio.com/posts.json',
        {
            observe: 'events',
            responseType: 'json'
        })
        .pipe(
            tap(event => {
                console.log(event);
                if(event.type === HttpEventType.Sent){
                    console.log(event);
                }
                if(event.type === HttpEventType.Response){
                    console.log(event.body);
                }
            })
        );
    }


}