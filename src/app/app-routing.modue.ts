import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreatComponent } from './posts/post-create/post-create.component';
import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [
    { path: '', component: PostListComponent },
    { path: 'create', component: PostCreatComponent, canActivate: [AuthGuard] },
    { path: 'edit/:postId', component: PostCreatComponent, canActivate: [AuthGuard] },   
    { path: 'auth', loadChildren: "./auth/auth.module#AuthModule"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})

export class AppRoutingModule {}