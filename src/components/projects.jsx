import React, {Component} from 'react';

export default class Projects extends Component {
    render() {
        return(
            <section id="projects" class="projects-section bg-light">
                <div class="container">

                <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div class="col-xl-8 col-lg-7">
                        <img class="img-fluid mb-3 mb-lg-0" src="images/logo.svg" alt=""/>
                    </div>
                    <div class="col-xl-4 col-lg-5">
                    <div class="featured-text text-center text-lg-left">
                        <h4>My website</h4>
                        <p class="text-black-50 mb-0">This site uses ReactJS and NodeJS to run in the background, a new framework I recently picked up.
                        </p>
                    </div>
                    </div>
                </div>

                <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div class="col-lg-6">
                        <img class="img-fluid mb-3 mb-lg-0" src="images/ARProject.png" alt=""/>
                    </div>
                    <div class="col-lg-6">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-left">
                            <h4 class="text-white">Landscape ARchitect</h4>
                            <p class="mb-0 text-white-50">
                                Landscape ARchitect is a Hololens AR application that gives a first person approach to designing a landscape around a home or business.
                                With this application, designers are able to drag and drop plants and trees around a property. Additionally the application simulates the growth
                                of plants and trees throughout the years and can show how light and shadow can affect the placed plants and surrounding ones by simulating the time of 
                                day.
                            </p>
                            <p class="mb-0 text-white-50">
                                The application was built using Unity, also it has Azure's web services to add additional plants and trees into the application. It uses a component-based
                                design for each of the menus used in the application. 
                            </p>
                            <hr class="d-none d-lg-block mb-0 ml-0"/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="row justify-content-center no-gutters">
                    <div class="col-lg-6">
                        <img class="img-fluid mb-3 mb-lg-0" src="images/BakelaarJ.png" alt=""/>
                    </div>
                    <div class="col-lg-6 order-lg-first">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-right">
                            <h4 class="text-white">Bakelaar Jewellers Repair Service</h4>
                            <p class="mb-0 text-white-50">
                                Using ASP.NET Core 2.2 MVC as well as Azure's hosting service, I am in the process of developing a software solution to help the process of taking in repairs for Bakelaar Jewellers.
                                It uses SQL Server database that runs off of Azure so that employees can access the application for multiple devices.
                            </p>
                            <hr class="d-none d-lg-block mb-0 mr-0"/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                </div>
            </section>
        );
    }
}