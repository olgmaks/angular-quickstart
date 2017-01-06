"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var image_model_1 = require('./model/image.model');
var image_list_component_1 = require('./image.list.component');
var header_component_1 = require('./header.component');
var footer_component_1 = require('./footer.component');
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.images = [
            new image_model_1.ImageModel(null, "http://animal-dream.com/data_images/panda/panda7.jpg", "Loading image ...", "Panda", "Panda description"),
            new image_model_1.ImageModel(null, "http://writm.com/wp-content/uploads/2016/08/Cat-hd-wallpapers.jpg", "Loading image ...", "Cat", "Cat description"),
            new image_model_1.ImageModel(null, "https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg", "Loading image ...", "Dog", "Dog description")
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/home_view.html',
            entryComponents: [image_list_component_1.ImageListComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map