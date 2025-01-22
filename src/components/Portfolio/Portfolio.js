import React from "react";
import "./Portfolio.css";
import apiUrls from "../../urls/apiUrls";

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

                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                        <img src={ apiUrls.getImagesUrl + "assets/img/gallery/apps/b2b.jpg" } alt="B2B-Ecommerce" />
                        <div className="portfolio-info">
                        <h4>B2B e-commerce Web Application</h4>
                        <p>A comprehensive B2B web application designed to connect buyers and sellers seamlessly. It facilitates efficient transactions, provides robust inventory management, and supports features like product cataloging, order tracking, and secure payment processing to streamline business operations.</p>
                        <a href="assets/img/gallery/apps/b2b.jpg" title="B2B e-commerce" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                        <img src={ apiUrls.getImagesUrl + "assets/img/gallery/apps/healthcare.jpg" } className="img-fluid" alt="Healthcare" />
                        <div className="portfolio-info">
                        <h4>Health Care Web Application</h4>
                        <p>A user-friendly web application designed for the US healthcare sector, allowing users to enroll in health plans seamlessly. The application guides users through a survey to gather information such as age, location, and preferences, then provides personalized plan recommendations. It ensures accessibility, compliance with healthcare standards, and a streamlined enrollment process.</p>
                        <a href="assets/img/gallery/apps/healthcare.jpg" title="Healthcare" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                        <img src={ apiUrls.getImagesUrl + "assets/img/gallery/apps/datta.png" }  className="img-fluid" alt="Shri Datta Dairy Farm"/>
                        <div className="portfolio-info">
                        <h4><a href="https://kaletushar222.github.io/dairyapp/" target="_blank">Shri Datta Dairy Farm</a></h4>
                        <p>A specialized application for dairy farms to automate the generation of monthly bills. Providing accurate billing and payment records. The system streamlines operations, reduces manual errors, and ensures transparency in financial transactions.</p>
                        <p><a href="https://kaletushar222.github.io/dairyapp/" target="_blank">https://kaletushar222.github.io/dairyapp/</a></p>
                        <a href="assets/img/gallery/apps/datta.png" title="Datta Dairy farm" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                        <img src={ apiUrls.getImagesUrl + "assets/img/gallery/apps/kondhare.jpg" } className="img-fluid" alt="Kondhare associates"/>
                        <div className="portfolio-info">
                        <h4><a href="https://kondhareassociates.co.in/" target="_blank">Kondhare Associates</a></h4>
                        <p>Static Website - <a href="https://kondhareassociates.co.in/" target="_blank">https://kondhareassociates.co.in/</a></p>
                        <a href="assets/img/gallery/apps/kondhare.jpg" title="Kondhare Accociates" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                        <img src={ apiUrls.getImagesUrl + "assets/img/gallery/photos/madhe.png" } className="img-fluid" alt="madhe ghat"/>
                        <div className="portfolio-info">
                        <h4>Madhe Ghat Waterfall</h4>
                        <p>Madhe Ghat is a waterfall located in Maharashtra, a state of India, around 62 km southwest of Pune, bordering Raigad district.</p>
                        <a href="assets/img/gallery/photos/madhe.jpg" title="Madhe Ghat" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        </div>
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                        <img src={ apiUrls.getImagesUrl + "assets/img/gallery/photos/venna.jpg" } className="img-fluid" alt="Venna Lake"/>
                        <div className="portfolio-info">
                        <h4>Venna Lake</h4>
                        <p>Venna Lake in Mahabaleshwar is a scenic spot offering boating, horse riding, and picnic areas amidst lush greenery.</p>
                        <a href="assets/img/gallery/photos/venna.jpg" title="Venna Lake" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                        <img src={ apiUrls.getImagesUrl + "assets/img/gallery/photos/mahabi.jpg" } className="img-fluid" alt="Krishnabai temple"/>
                        <div className="portfolio-info">
                        <h4>Krishnabai Temple</h4>
                        <p>Madhe Ghat is a waterfall located in Maharashtra, a state of India, around 62 km southwest of Pune, bordering Raigad district.</p>
                        <a href="assets/img/gallery/photos/mahabi.jpg" title="Krishnabai temple" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                        <img src={ apiUrls.getImagesUrl + "assets/img/gallery/photos/karla.jpg" } className="img-fluid" alt="karla"/>
                        <div className="portfolio-info">
                        <h4>Karla Caves</h4>
                        <p>A complex of ancient Buddhist Indian rock-cut caves at Karli near Lonavala, Maharashtra</p>
                        <a href="assets/img/gallery/photos/karla.jpg" title="Karla Caves" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                        <img src={ apiUrls.getImagesUrl + "assets/img/gallery/photos/diveagar.jpeg" } className="img-fluid" alt="Diveagar"/>
                        <div className="portfolio-info">
                        <h4>Diveagar Beach</h4>
                        <p>Diveagar (Dive Agar) is a village located in Shrivardhan Taluka</p>
                        <a href="assets/img/gallery/photos/diveagar.jpg" title="Diveagar" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                        <img src={ apiUrls.getImagesUrl + "assets/img/gallery/photos/bird.jpeg" } className="img-fluid" alt="Bird"/>
                        <div className="portfolio-info">
                        <h4>Bird</h4>
                        <a href="assets/img/gallery/photos/bird.jpeg" title="Bird" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Portfolio;