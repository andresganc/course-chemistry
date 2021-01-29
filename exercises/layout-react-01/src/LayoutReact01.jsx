import React, { Fragment } from 'react'

const LayoutReact01 = () => {
    return (
        <Fragment>
            <header className='header'>
                <h2 className='header__titulo'> Lorem ipsum </h2>
            </header>


            <section className='section'>
                <div className='section__div-contenedor'>

                    <div className='section__div-bloque'>
                        <p className="section__texto"> Lorem ipsum </p>
                    </div>

                    <div className='section__div-bloque'>
                        <p className="section__texto"> Lorem ipsum </p>
                    </div>

                </div>
            </section>


            <footer className='footer'>
                <div className='footer__div-contenedor'>

                    <div className='footer__div-bloque'>
                        <p className="footer__texto"> Lorem ipsum </p>
                    </div>

                    <div className='footer__div-bloque'>
                        <p className="footer__texto"> Lorem ipsum </p>
                    </div>

                    <div className='footer__div-bloque'>
                        <p className="footer__texto"> Lorem ipsum </p>
                    </div>
                </div>
            </footer>

        </Fragment>
    )
}

export default LayoutReact01
