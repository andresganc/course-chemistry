
import React, { Fragment, useState } from 'react'

// Components Material UI 
import Button from '@material-ui/core/Button';

// Icons
import SaveIcon from '@material-ui/icons/Save';

function HeaderAllTasksPublishes() {
    return (
        <Fragment>
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={Button}
                startIcon={<SaveIcon />}
            >
                Agregar tarea
            </Button>
        </Fragment>
    )
}

export default HeaderAllTasksPublishes
