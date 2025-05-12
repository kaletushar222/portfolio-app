import React from "react";
import { useState } from "react";
import apiUrls from "../../urls/apiUrls";
import "./Portfolio.css";

const Portfolio = (props) => {
	const applications = props.applications;
	const photographs = props.photographs;
	const imagesURL = apiUrls.imagesURL;
	const [filterSelected, setFilterSelected] = useState("ALL");

	const handleFilterSelection = (filter) => {
		setFilterSelected(filter);
	};

	// ease in and out animation when we switch between filters
	

	return (
		<div>
			<section id="portfolio" className="portfolio section">
				<div className="container section-title" data-aos="fade-up">
					<h2>Gallery</h2>
					<p>A showcase of innovative applications I have developed, spanning e-commerce, inventory, and financial management, alongside a collection of photographs capturing unique perspectives of the world.</p>
				</div>

				<div className="container">
					<div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

						<ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
							<li onClick={ () => handleFilterSelection("ALL") } data-filter="*" className={ filterSelected == "ALL" && "filter-active" } >All</li>
							<li onClick={ () => handleFilterSelection("APPS") } data-filter=".filter-app" className={ filterSelected == "APPS" && "filter-active" } >Applications</li>
							<li onClick={ () => handleFilterSelection("PHOTOS") } data-filter=".filter-product" className={ filterSelected == "PHOTOS" && "filter-active" }>Photographs</li>
						</ul>

						<div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
							{
								applications.map((app, key) => {
									if (filterSelected == "ALL" || filterSelected === "APPS") {
										return (
											<div key={key} className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
												<img style={{width: "100%"}} src={ imagesURL + app.imageUrl} alt={app.title} />
												<div className="portfolio-info">
													<h4>{app.title}</h4>
													<p>{app.description}</p>
													{ app.appUrl && <span> <a href={ app.appUrl } target="_blank" > Visit App </a> </span> }
													<a href={imagesURL + app.imageUrl} title={app.title} className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
												</div>
											</div>
										)
									}
								})
							}
							{
								photographs.map((photoObj, key) => {
									if (filterSelected == "ALL" || filterSelected === "PHOTOS") {
										return (
											<div key={key} className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
												<img style={{width: "100%"}} src={ imagesURL + photoObj.imageUrl } className="img-fluid" alt={ photoObj.title } />
												<div className="portfolio-info">
													<h4>{ photoObj.title }</h4>
													<p> { photoObj.description }</p>
													<a href={ imagesURL + photoObj.imageUrl } title={ photoObj.title } className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
												</div>
											</div>
										)
									}
								})
              				}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Portfolio;