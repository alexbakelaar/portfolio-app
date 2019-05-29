import React, {Component} from 'react';

export default class Contact extends Component {
    render() {
        return(
            <section class="contact-section bg-black" id="contact">
                <div class="container">

                <div class="row">

                    <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card py-4 h-100">
                        <div class="card-body text-center">
                            <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                            <h4 class="text-uppercase m-0">Address</h4>
                            <hr class="my-4"/>
                            <div class="small text-black-50">1229 Marlborough Court, Apt 314</div>
                            <div class="small text-black-50">Oakville ON, Canada</div>
                        </div>
                    </div>
                    </div>

                    <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card py-4 h-100">
                        <div class="card-body text-center">
                        <i class="fas fa-envelope text-primary mb-2"></i>
                        <h4 class="text-uppercase m-0">Email</h4>
                        <hr class="my-4"/>
                        <div class="small text-black-50">
                            <a href="#">alexbakelaar@gmail.com</a>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card py-4 h-100">
                        <div class="card-body text-center">
                        <i class="fas fa-mobile-alt text-primary mb-2"></i>
                        <h4 class="text-uppercase m-0">Phone</h4>
                        <hr class="my-4"/>
                        <div class="small text-black-50">+1 (519) 292-9985</div>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="social d-flex justify-content-center">
                    <a href="#" class="mx-2">
                    <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="mx-2">
                    <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="mx-2">
                    <i class="fab fa-github"></i>
                    </a>
                </div>

                </div>
            </section>
        );
    }
}