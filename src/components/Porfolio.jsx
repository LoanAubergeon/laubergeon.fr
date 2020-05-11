import React from "react";
import "bulma/css/bulma.css";
import "../css/App.css";

const Portfolio = () => (
	<div class='container'>
		<div class='tile is-ancestor is-four-fifths'>
			<div class='tile is-vertical'>
				<div class='tile'>
					<div class='tile is-parent is-vertical is-4'>
						<div class='tile is-parent is-vertical'>
							<article class='tile is-child'>
								<div class='notification mysubtitle'>
									<h3>Get A Lift</h3>
								</div>
							</article>
							<article class='tile is-child'>
								<div
									class='img-centered img-centered-resized'
									data-content='Application de covoiturage quotien pour effectuer les trajets domicile/travail à Malte. Application développée en Swift. Back-end en Node.js et base de données SQL.'>
									<img
										src={require("../images/GetALift.png")}
										alt='Un ordinateur avec un café et un bloc note'
									/>
								</div>
							</article>
							<div class='tile'></div>
						</div>
					</div>
					<div class='tile is-parent is-vertical'>
						<div class='tile is-parent is-vertical'>
							<article class='tile is-child'>
								<div class='notification mysubtitle'>
									<h3>Application domotique</h3>
								</div>
							</article>
							<article class='tile is-child'>
                <div class='img-centered' data-content="Panneau de démonstration d'un service de domotique. Panneau équipé d'actionneurs relié a une raspberry.
                 (Les actionneurs simulent le comportement d'un capteur, cela permet de faire varier la valeur rapidement). Les données sont affichés via cette application Android développé en Java Android." >
									<img
										src={require("../images/Citelio.png")}
										alt='Un ordinateur avec un café et un bloc note'
										class='img-centered'
									/>
								</div>
							</article>
							<div class='tile'></div>
							<div class='tile'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
export default Portfolio;
