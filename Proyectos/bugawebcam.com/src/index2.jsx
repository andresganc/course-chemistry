
import React, { Fragment } from 'react';

function Index() {
    return (
        <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Buga Web Cam</title>
            {/* FavIcon */}
            <link rel="icon" type="image/jpg" href="./images/Logo.jpg" />
            {/* Library CSS */}
            <link href="css/lecker_library.css" rel="stylesheet" />
            {/* Icons CSS */}
            <link href="fonts/themify-icons.css" rel="stylesheet" />
            <link href="fonts/selima/stylesheet.css" rel="stylesheet" />
            <link href="fonts/introrust/stylesheet.css" rel="stylesheet" />
            {/* Theme CSS */}
            <link href="css/lecker_style.css" rel="stylesheet" />
            {/* Google Fonts */}
            <link href="https://fonts.googleapis.com/css?family=Bree+Serif|Lato" rel="stylesheet" />
            {/* Page */}
            <div className="lec_page lec_page_rust" id="lec_page">
                {/* To Top */}
                <a href="#lec_page" className="lec_top lec_go"><b className="ti ti-angle-up" /></a>
                {/* Header */}
                <header>
                    <div className="container">
                        {/* Logo */}
                        <a href="/" className="lec_logo">Buga <i><span>Web</span><span>Cam</span></i></a>
                        {/* Menu */}
                        <div className="lec_main_menu">
                            <div className="lec_main_menu_icon">
                                <i /><i /><i /><i />
                                <b>Menu</b>
                                <b className="lec_main_menu_icon_b">Atras</b>
                            </div>
                        </div>
                        {/* Menu Content */}
                        <div className="lec_main_menu_content lec_image_bck" data-color="rgba(0,0,0,0.9)" data-image="https://nc-web.com.co/plantillas/images/fondos/fondo-01.jpg">
                            {/* Over */}
                            <div className="lec_over" data-color="#000" data-opacity="0.8" />
                        </div>
                        <div className="lec_main_menu_content_menu lec_wht_txt text-right">
                            <div className="container">
                                <ul>
                                    <li><a href="index.html">Inicio</a></li>
                                    <li><a href="02_02_multipage_about.html">Quienes Somos</a></li>
                                    <li><a href="02_07_multipage_gallery.html">Galeria</a></li>
                                    <li><a href="02_09_multipage_reservation.html">Formulario</a></li>
                                    <li><a href="02_06_multipage_contacts.html">Contactenos</a></li>
                                    {/*
          <li class="lec_parent"><a href="#">Onepage</a>
              <ul>
                  <li><a href="01_02_bbq.html#catering">Catering</a></li>
                  <li><a href="01_02_bbq.html#specials">Specials</a></li>
                  <li><a href="01_02_bbq.html#products">Product of the Day</a></li>
                  <li><a href="01_02_bbq.html#story">Our Story</a></li>
                  <li><a href="01_02_bbq.html#events">Events & News</a></li>
                  <li><a href="01_02_bbq.html#testimonials">Testimonials</a></li>
                  <li><a href="01_02_bbq.html#reservation">Reservation</a></li>
              </ul>
          </li>
          */}
                                    {/*
          <li class="lec_parent"><a href="#">Multipage</a>
              <ul>
                  <li><a href="02_01_multipage_index.html">Multipage Main Page</a></li>
                  <li><a href="02_02_multipage_about.html">Multipage About Us</a></li>
                  <li><a href="02_03_multipage_catering.html">Multipage Catering</a></li>
                  <li><a href="02_04_multipage_specials.html">Multipage Specials</a></li>
                  <li><a href="02_05_multipage_menu.html">Multipage Menu</a></li>
                  <li><a href="02_08_multipage_careers.html">Multipage Careers</a></li>
                  <li><a href="02_10_multipage_slider.html">Slider</a></li>
                  .<li><a href="02_06_multipage_contacts.html">Multipage Contacts</a></li>
                  <li><a href="02_07_multipage_gallery.html">Multipage Gallery</a></li>
                  <li><a href="02_09_multipage_reservation.html">Multipage Reservation</a></li> 
              </ul>
          </li>
          */}
                                </ul>
                                <div className="lec_main_menu_content_menu_copy">
                                    <p>BugaWebCam 2020</p>
                                    {/* Social Buttons */}
                                    <div className="lec_footer_social">
                                        <a target="_blank" href="https://www.facebook.com/bugawebcam"><i className="ti ti-facebook lec_icon_box" /></a>
                                        <a target="_blanK" href="https://instagram.com/bugawebcam/"><i className="ti ti-instagram lec_icon_box" /></a>
                                        {/*
                      <a href="#"><i class="ti ti-google lec_icon_box"></i></a>
                      <a href="#"><i class="ti ti-youtube lec_icon_box"></i></a>
                      <a href="#"><i class="ti ti-twitter lec_icon_box"></i></a>
                      <a href="#"><i class="ti ti-pinterest lec_icon_box"></i></a>
                   */}
                                    </div>
                                </div>
                            </div>
                            {/* container end */}
                        </div>
                        {/* menu content end */}
                    </div>
                    {/* container end */}
                </header>
                {/* Header End */}
                {/* Slider */}
                <div className="lec_slider lec_image_bck lec_fixed lec_wht_txt" data-stellar-background-ratio="0.3" data-image="./images/habitacion-01.jpg">
                    {/* Over */}
                    <div className="lec_over" data-color="#000" data-opacity="0.7" />
                    <div className="container">
                        {/* Slider Texts */}
                        <div className="lec_slide_txt lec_slide_center_middle text-center">
                            <p><img src="images/Logo.png" alt="" width={400} /></p>
                            <div className="lec_rust lec_slide_title">BUGAWEBCAM</div>
                            <div className="lec_slide_subtitle">Las mujeres mas<br />Hermosas </div>
                        </div>
                        {/* Slider Texts End */}
                    </div>
                    {/* container end */}
                    {/* Slide Down */}
                    <a className="lec_scroll_down lec_go" href="#lec_content">
                        <b />
                        <i className="ti ti-angle-double-down" />
                    </a>
                </div>
                {/* Slider End */}
                {/* Content */}
                <section id="lec_content" className="lec_content">
                    {/* section */}
                    <section className="lec_section lec_section_borders lec_section_borders_lines lec_wht_txt lec_image_bck" data-color="#000">
                        <div className="container text-center">
                            <h3>TRADICIONES QUE ANOTAN <br />AL SIGLO XXI</h3>
                        </div>
                        {/* container end */}
                    </section>
                    {/* section end */}
                    {/* section */}
                    <section className="lec_section lec_image_bck lec_fixed lec_section_no_overlay lec_wht_txt" data-stellar-background-ratio="0.2" data-image="./images/modelo-04.jpg">
                        {/* Over */}
                        <div className="lec_over" data-color="#000" data-opacity="0.8" />
                        <div className="container text-center">
                            <h2 className="lec_rust">BUGAWEBCAM</h2>
                            <h3 className="lec_gold_subtitle">Modelaje en linea desde tu casa.</h3>
                            <a href="02_07_multipage_gallery.html" className="btn">Galeria <i className="ti ti-camera" /></a>
                        </div>
                        {/* container end */}
                    </section>
                    {/* section end */}
                    {/* section */}
                    <section className="lec_section lec_image_bck lec_fixed lec_section_no_overlay lec_wht_txt" data-stellar-background-ratio="0.2" data-image="./images/modelo-webcam.jpg">
                        {/* Over */}
                        <div className="lec_over" data-color="#000" data-opacity="0.8" />
                        <div className="container text-center">
                            <p><img src="images/logo.png" alt="" height={250} /></p>
                            <h2 className="lec_rust">Abastecimiento en lo que tu desees</h2>
                            <h3 className="lec_gold_subtitle"> Compromiso es la condición más importante.</h3>
                            <a href="02_02_multipage_about.html" className="btn">Quienes somos<i className="ti ti-eye" /></a>
                        </div>
                        {/* container end */}
                    </section>
                    {/* section end */}
                    {/* section */}
                    <section className="lec_section lec_section_borders lec_section_borders_lines">
                        <div className="container text-center">
                            <h3> A través de un modelo de capacitación constante puedes adquirir experiencia en el medio del modelaje webcam. Procesos ascendentes con posibilidad de incremento mes a mes. Nuestro estudio cuenta con instalaciones listas para transmitir. Perfecto para personas que no tienen su propio escenario. Disponemos de habitaciones totalmente privadas, independientes y acondicionadas, para que puedas desempeñar tranquila y cómodamente tu labor. Absoluta discreción.
          </h3></div>
                        {/* container end */}
                    </section>
                    {/* section end */}
                    {/* section */}
                    <section className="lec_section lec_image_bck lec_fixed lec_section_no_overlay lec_wht_txt" data-stellar-background-ratio="0.2" data-image>
                        {/* Over */}
                        <div className="lec_over" data-color="#000" data-opacity="0.8" />
                        <div className="container text-center">
                            <p><img src="images/logo.png" alt="" height={250} /></p>
                            <h2 className="lec_rust">Disfruta del mejor sexo webcam</h2>
                            <h3 className="lec_gold_subtitle">Modelos hermosas y sexis,sensualidad y confianza.</h3>
                            <a href="02_06_multipage_contacts.html" className="btn">Contactenos<i className="ti ti-mobile" /></a>
                        </div>
                        {/* container end */}
                    </section>
                    {/* section end */}
                </section>
                {/* Content End */}
                {/* Footer */}
                <footer className="lec_image_bck text-center lec_wht_txt" data-image="images/main_back_bl.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {/* Copyrights */}
                                <p><img src="images/logo.png" alt="" height={250} /></p>
                                <p>Nuestros principios son la base sobre los cuales está constituida Buga Web Cam, <br />
              los cuales nos ayudan a buscar el éxito corporativo y el éxito personal de cada una de nuestras modelos.<br />
                                </p>
                                {/* Social Buttons */}
                                <div className="lec_footer_social">
                                    <div data-animation="animation_blocks" data-bottom="@class:noactive" data--100-bottom="@class:active">
                                        <a target="_blank" href="https://www.facebook.com/bugawebcam"><i className="ti ti-facebook lec_icon_box" /></a>
                                        <a target="_blanK" href="https://instagram.com/bugawebcam/"><i className="ti ti-instagram lec_icon_box" /></a>
                                        {/*
                      <a href="#"><i class="ti ti-google lec_icon_box"></i></a>
                      <a href="#"><i class="ti ti-youtube lec_icon_box"></i></a>
                      <a href="#"><i class="ti ti-twitter lec_icon_box"></i></a>
                      <a href="#"><i class="ti ti-pinterest lec_icon_box"></i></a>
                  */}
                                    </div>
                                </div>
                                <p>© Bugawebcam 2020</p>
                                <br />
                                <p>Diseñado por</p>
                                <p> NC - Web :  <a target="_blank" href="https://nc-web.com.co"> www.nc-design.com.co </a></p>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* Footer End */}
            </div>
            {/* Page End */}
            {/* JQuery */}
            {/* Library JS */}
            {/* Theme JS */}
        </div>

    );
}

export default Index;