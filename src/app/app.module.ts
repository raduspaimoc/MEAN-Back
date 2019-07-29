import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatTableModule, MatFormFieldModule, MatInputModule  } from '@angular/material';

import { AppComponent } from './app.component';
import { PostCreatComponent } from './posts/post-create/post-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatCardModule, MatTableModule, MatFormFieldModule , MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
