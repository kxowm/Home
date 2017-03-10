import { Component } from '@angular/core';
import { CarouselConfig } from 'ng2-bootstrap/carousel';


@Component({
    selector:'myslide',
    template:`
    
     <carousel>
                    <slide>
                      <img src="assets/000.png" alt="First slide">
                      <div class="carousel-caption">
                        <h3></h3>
                        <p></p>
                      </div>
                    </slide>
                    <slide>
                      <img src="assets/111.png" alt="Second slide">
                      <div class="carousel-caption">
                        <h3></h3>
                        <p></p>
                      </div>
                    </slide>
                    <slide>
                      <img src="assets/333.png" alt="Third slide">
                      <div class="carousel-caption">
                        <h3></h3>
                        <p></p>
                      </div>
                    </slide>
            </carousel>
    
    
    `,

     providers: [{provide: CarouselConfig, useValue: {interval: 2500, noPause: true}}],
     styles:[ 'img{width:80%;height:83%}',]

})

export class slideComponent {


}