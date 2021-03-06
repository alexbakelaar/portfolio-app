import React, {Component} from 'react';

export default class header extends Component {
    render() {
        return(
            <header class="masthead">
                <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center">
                    <h1 class="mx-auto my-0 text-uppercase">Alex Bakelaar</h1>
                    <h2 class="text-white-50 mx-auto mt-2 mb-5">Software Developer</h2>
                    <a href="#about" class="btn btn-primary js-scroll-trigger">About</a>
                </div>
                </div>
            </header>
        );
    }
}

