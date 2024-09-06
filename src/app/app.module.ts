
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { QuizzComponent } from './quizz/quizz/quizz.component';
import { ResultatComponent } from './quizz/resultat/resultat.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from './quizz/question/question.component';
import { ReponseComponent } from './quizz/reponse/reponse.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TimerPipe } from './timer.pipe';
import { NameResponseDirective } from './name-response.directive';
import { ConfirmComponent } from './shared/popup/confirm/confirm.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    QuizzComponent,
    ResultatComponent,
    QuestionComponent,
    ReponseComponent,
    RegisterComponent,
    LoginComponent,
    TimerPipe,
    NameResponseDirective,
    ConfirmComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
