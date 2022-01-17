
import React, { Fragment } from 'react'

const StylesCSSInLine = () => {
    return (
        <Fragment>
            <div style={{ backgroundColor: 'lightgray', height: '100px' }}>
                <h3> STYLES INLINE </h3>
                <button style={{ color: 'white' }}> ENVIAR </button>
                <button style={{ 
                    padding: '5px 15px',
                    backgroundColor: 'tomato',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    outline: 'none',
                    cursor: 'pointer'
                 }}> CANCELAR </button>
            </div>  
        </Fragment>
    )
}

export default StylesCSSInLine


