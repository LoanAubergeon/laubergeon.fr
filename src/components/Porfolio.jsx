import React from "react"
import 'bulma/css/bulma.css'
import '../css/App.css';


const Portfolio = () => (
    <div class="container">
        <div class="tile is-ancestor is-four-fifths">
          <div class="tile is-vertical">
            <div class="tile">
              <div class="tile is-parent is-vertical is-4">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child">
                    <div class="notification mysubtitle">
                      <h3>Get A Lift</h3>
                    </div>
                  </article>
                  <article class="tile is-child" >
                    <div class="img-centered" data-content="Example">
                      <img src={"./GetALift.png"} alt="Un ordinateur avec un café et un bloc note"/>
                    </div>
                  </article>
                  <div class="tile"></div>
                </div>
              </div>
              <div class="tile is-parent is-vertical">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child">
                  <div class="notification mysubtitle">
                    <h3>Application domotique</h3>
                  </div>
                </article>
                <article class="tile is-child">
                  <div class="img-centered" data-content="Example">
                  <img src={"./Citelio.png"} alt="Un ordinateur avec un café et un bloc note" class="img-centered"/>
                  </div>
                </article>
                <div class="tile"></div>
                <div class="tile"></div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
)
export default Portfolio
