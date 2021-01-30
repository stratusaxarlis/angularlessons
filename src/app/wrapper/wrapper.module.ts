import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HeaderComponent } from './wrapper/header/header.component';
import { ContentComponent } from './wrapper/content/content.component';
import { FooterComponent } from './wrapper/footer/footer.component';
import { MenuComponent } from './wrapper/menu/menu.component';
import { PipeExampleComponent } from '../pipe-example/pipe-example.component';



@NgModule({
  declarations: [WrapperComponent, HeaderComponent, ContentComponent, FooterComponent, MenuComponent,PipeExampleComponent],
  imports: [
    CommonModule
  ],
  exports:[WrapperComponent]
})
export class WrapperModule { }
