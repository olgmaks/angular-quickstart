import { Component } from '@angular/core';
import { ImageModel } from './model/image.model'
import { ImageListComponent } from './image.list.component'
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component'; 
@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/home_view.html', 
  entryComponents: [ImageListComponent, HeaderComponent, FooterComponent]
})
export class AppComponent  {
   name = 'Angular'; 
   images:Array<ImageModel>;
   constructor () {
     this.images = [
       new ImageModel(null,"http://animal-dream.com/data_images/panda/panda7.jpg","Loading image ...","Panda","Panda description"),
       new ImageModel(null,"http://writm.com/wp-content/uploads/2016/08/Cat-hd-wallpapers.jpg","Loading image ...","Cat","Cat description"),
       new ImageModel(null,"https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg","Loading image ...","Dog","Dog description")
     ]
   }
}
