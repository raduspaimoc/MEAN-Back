import { NgModule } from '@angular/core';
import { PostCreatComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostsService } from './posts.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        PostCreatComponent,
        PostListComponent, 
    ],

    imports: [
        CommonModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        RouterModule
    ]
})
export class PostsModule {

}