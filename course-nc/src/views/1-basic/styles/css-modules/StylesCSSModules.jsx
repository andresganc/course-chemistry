
import React, { Fragment } from 'react'

// Styles
// Sin CSS Modules
import './css/section-about.css'
import './css/section-servicios.css'


// Con CSS Modules
//import stylesA from './css/section-about.module.css'
//import stylesS from './css/section-servicios.module.css'

function StylesCSSModules() {
    return (
        <Fragment>

            
            {/*  Sin CSS Modules */}
            <section className="section_about">
                <h2 className="section_about__titulo"> Este es el Section de acerca de </h2>
                <h4 className="section__subtitulo"> Es es el subtitulo </h4>
            </section>

            <section className="section_servicios">
                <h2 className="section_servicios__titulo"> Este es el Section de servicios </h2>
                <h4 className="section__subtitulo"> Es es el subtitulo </h4>
            </section>
            


            {/*  Con CSS Modules */}
            {/* 
            <section className={stylesA.section_about}>
                <h2 className={stylesA.section_about__titulo}> Este es el Section de acerca de </h2>
                <h4 className={stylesA.section__subtitulo}> Es es el subtitulo </h4>
            </section>

            <section className={stylesS.section_servicios}>
                <h2 className={stylesS.section_servicios__titulo}> Este es el Section de servicios </h2>
                <h4 className={stylesS.section__subtitulo}> Es es el subtitulo </h4>
            </section>
            */}

            
        </Fragment>
        
    )
}

export default StylesCSSModules
