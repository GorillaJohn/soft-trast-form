import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { HttpClientModule } from '@angular/common/http';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};
@NgModule({
  declarations: [
    AppComponent,
    MessageFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfigFunction),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
