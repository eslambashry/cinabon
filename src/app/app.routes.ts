import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

export const routes: Routes = [
   { path: '',
    component: MainLayoutComponent,
    children:[
          { path: 'home', component: HomeComponent },
          { path: 'about', component: AboutComponent },
          { path: 'blogs', component: BlogsComponent },
          { path: 'contact', component: ContactComponent },
          { path: 'products', component: ProductsComponent },
          { path: 'single-product', component: SingleProductComponent },
    ]
   }

        ]



        