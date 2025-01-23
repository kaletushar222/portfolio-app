import React from "react";
import "./Portfolio.css";
import apiUrls from "../../urls/apiUrls";

const applications = [
	{
		id: "1",
		title: "B2B e-commerce Web Application",
		imageUrl: apiUrls.getImagesUrl + "assets/img/gallery/apps/b2b.jpg",
		description: "A comprehensive B2B web application designed to connect buyers and sellers seamlessly. It facilitates efficient transactions, provides robust inventory management, and supports features like product cataloging, order tracking, and secure payment processing to streamline business operations."

	},
	{
		id: "2",
		title: "Health Care Web Application",
		imageUrl: apiUrls.getImagesUrl + "assets/img/gallery/apps/healthcare.jpeg",
		description: "A user-friendly web application designed for the US healthcare sector, allowing users to enroll in health plans seamlessly. The application guides users through a survey to gather information such as age, location, and preferences, then provides personalized plan recommendations. It ensures accessibility, compliance with healthcare standards, and a streamlined enrollment process."
	},
	{
		id: "3",
		title: "Shri Datta Dairy Farm",
		imageUrl: apiUrls.getImagesUrl + "assets/img/gallery/apps/datta.png",
		description: "A specialized application for dairy farms to automate the generation of monthly bills. Providing accurate billing and payment records. The system streamlines operations, reduces manual errors, and ensures transparency in financial transactions.",
		appUrl: "https://kaletushar222.github.io/dairyapp/"
	},
	{
		id: "4",
		title: "Kondhare Associates",
		imageUrl: apiUrls.getImagesUrl + "assets/img/gallery/apps/kondhare.jpeg",
		description: "Static Website",
		appUrl: "https://kondhareassociates.co.in"
	},
	{
		id: "5",
		title: "Chronicle legal",
		imageUrl: apiUrls.getImagesUrl + "assets/img/gallery/apps/chronicle.jpg",
		description: "Static Website",
		appUrl: "https://chroniclelegal.in/"
	}
];

const photographs = [
	{
		id: "1",
		title: "Madhe Ghat Waterfall",
		imageUrl: apiUrls.getImagesUrl + "assets/img/gallery/photos/madhe.png",
		description: "Madhe Ghat is a waterfall located in Maharashtra, a state of India, around 62 km southwest of Pune, bordering Raigad district."
	},
	{
		id: "2",
		title: "Venna Lake",
		imageUrl: apiUrls.getImagesUrl + "assets/img/gallery/photos/venna.jpg",
		description: "Venna Lake in Mahabaleshwar is a scenic spot offering boating, horse riding, and picnic areas amidst lush greenery."
	},
	{
		id: "3",
		title: "Krishnabai Temple",
		imageUrl: apiUrls.getImagesUrl + "assets/img/gallery/photos/mahabi.jpg",
		description: "Krishnabai Temple, built in the 13th century, is believed to be the source of the Krishna River. Nestled in Mahabaleshwar's serene hills, it's a tranquil spot for history and nature lovers."
	},
	{
		id: "5",
		title: "Diveagar Beach",
		imageUrl: apiUrls.getImagesUrl + "assets/img/gallery/photos/diveagar.jpeg",
		description: "Diveagar (Dive Agar) is a village located in Shrivardhan Taluka"
	}
];



const Portfolio = () => {
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
							<li data-filter="*" className="filter-active">All</li>
							<li data-filter=".filter-app">Applications</li>
							<li data-filter=".filter-product">Photographs</li>
						</ul>

						<div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
							{
								applications.map((app, key) => {
									return (
										<div key={key} className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
											<img style={{width: "100%"}} src={app.imageUrl} alt={app.title} />
											<div className="portfolio-info">
												<h4>{app.title}</h4>
												<p>{app.description}</p>
												{ app.appUrl && <span> <a href={ app.appUrl } target="_blank" > Visit App </a> </span> }
												<a href={app.imageUrl} title={app.title} className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
											</div>
										</div>
									)
								})
							}
							{
								photographs.map((photoObj, key) => {
									return (
										<div key={key} className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
											<img style={{width: "100%"}} src={ photoObj.imageUrl } className="img-fluid" alt={ photoObj.title } />
											<div className="portfolio-info">
												<h4>{ photoObj.title }</h4>
												<p> { photoObj.description }</p>
												<a href={ photoObj.imageUrl } title={ photoObj.title } className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
											</div>
										</div>
									)
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