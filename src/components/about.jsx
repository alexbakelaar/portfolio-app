import React, {Component} from 'react';

export default class About extends Component {
    render() {
        return(
            <div><section id="about" class="about-section text-center">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <h2 class="text-white mb-4">About</h2>
                  <p class="text-white-50">
                    I am newly graduated software developer from Sheridan College, where I graduated with a degree in Applied Computer Science.
                    Currently I am developing independent software solutions and learning new software frameworks. This site uses ReactJS and NodeJS
                    to run in the background, a new framework I recently picked up.
                  </p>
                </div>
              </div>
              {/* <img src="images/about.png" class="img-fluid"/>  */}
            </div>
          </section>
            </div>
        );
    }
}