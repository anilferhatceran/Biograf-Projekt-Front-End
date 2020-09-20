import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { HeaderComponent } from './Components/header/header.component';
import { AboutUsComponent} from './Components/about-us/about-us.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AdminComponent } from "./Components/admin/admin.component";
import { MovieItemComponent } from "./Components/movie-item/movie-item.component";
import { AddItemsComponent } from "./Components/add-items/add-items.component";
import { LandingPageComponent } from "./Components/landing-page/landing-page.component";

const routes: Routes = [
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'admin',component:AdminComponent},
  { path: 'movie-item',component:MovieItemComponent},
  { path: 'add-items',component:AddItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContactUsComponent,MoviesComponent, HeaderComponent, AboutUsComponent, FooterComponent,MovieItemComponent,AddItemsComponent,LandingPageComponent]
