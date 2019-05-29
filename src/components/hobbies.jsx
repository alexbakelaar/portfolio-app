import React, {Component} from 'react';

export default class Hobbies extends Component {
    render() {
        return(
            <div>
            <section id="hobbies" class="projects-section bg-light">
                <div class="container">

                <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div class="col-xl-8 col-lg-7">
                        <img class="img-fluid mb-3 mb-lg-0" src="images/roadtrip.jpg" alt=""/>
                    </div>
                    <div class="col-xl-4 col-lg-5">
                    <div class="featured-text text-center text-lg-left">
                        <h4>Road Trips</h4>
                        <p class="text-black-50 mb-0">
                            I ever since I learned to drive it has always been a personal goal of mine to drive across Canada. Starting in Ontario, I have driven to Vancouver Island and back.
                            In the near future I plan on going out east so I can say I offically have been across Canada. 
                        </p>
                    </div>
                    </div>
                </div>

                <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div class="col-lg-6">
                        <img class="img-fluid mb-3 mb-lg-0" src="images/snow2.jpg" alt=""/>
                    </div>
                    <div class="col-lg-6">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-left">
                            <h4 class="text-white">snowboarding</h4>
                            <p class="mb-0 text-white-50">
                                Starting from a young age, I have been snowboarding for most of my life. Being a season ticket holder at a nearby hill, I never miss out on the snowboarding season.    
                            </p>
                            <hr class="d-none d-lg-block mb-0 ml-0"/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="row justify-content-center no-gutters">
                    <div class="col-lg-6">
                        <img class="img-fluid mb-3 mb-lg-0" src="images/custombuild.jpg" alt=""/>
                    </div>
                    <div class="col-lg-6 order-lg-first">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-right">
                            <h4 class="text-white">Custom PC Building</h4>
                            <p class="mb-0 text-white-50">
                                When it comes to computers I am passionate about the internal hardware that comes with them. For the last five years I have been building custom PCs, 
                                focusing on showing off the internals with proper cable management on both the inside and outside. Keeping up to date on the latest hardware that comes to market
                                is another enjoyment, as I plan builds a year in advance. Stay tuned to my custom loop build coming later this summer. 
                            </p>
                            <hr class="d-none d-lg-block mb-0 mr-0"/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                </div>
            </section>
            <section id="signup" class="signup-section">
            <div class="container">
              <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto text-center">
        
        
                </div>
              </div>
            </div>
          </section></div>
        );
    }
}