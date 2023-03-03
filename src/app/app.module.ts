import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './private/navbar/navbar.component';
import { ConversationsComponent } from './private/conversations/conversations.component';
import { MessagesComponent } from './private/messages/messages.component';
import { LogInComponent } from './public/log-in/log-in.component';
import { RegisterComponent } from './public/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConversationsComponent,
    MessagesComponent,
    LogInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
