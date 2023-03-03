import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversationRoutingModule } from './conversation-routing.module';
import { PrivateParentComponent } from './private-parent/private-parent.component';


@NgModule({
  declarations: [
    PrivateParentComponent
  ],
  imports: [
    CommonModule,
    ConversationRoutingModule
  ]
})
export class ConversationModule { }
