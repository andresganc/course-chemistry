import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";

// Imagenes Assets MK
import office2 from "assets/img/examples/office2.jpg";

// Componentes MK
import Menu from 'components/Header/HeaderLinks'; 


const useStyles = makeStyles(headersStyle);

export default function SectionHeaders({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    // we've set the className to cd-section so we can make smooth scroll to it
    <div className="cd-section" {...rest}>
      <div className={classes.sectionBlank} id="blanksection" />


     


      {/* HEADER 2 START */}
      <div>

        

        <Header
          absolute
          brand="Creative Tim"
          color="transparent"
          
          links={
            
            <div className={classes.collapse}>

              <Menu />

            </div>
          }
        />
        <div
          className={classes.pageHeader}
          style={{ backgroundImage: `url("${office2}")` }}
        >
          <div className={classes.conatinerHeader2}>
            <GridContainer>
              <GridItem
                xs={12}
                sm={8}
                md={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
                <h1 className={classes.title}>You should work with us!</h1>
                <h4>
                  Now you have no excuses, it{"'"}s time to surprise your
                  clients, your competitors, and why not, the world. You
                  probably won
                  {"'"}t have a better chance to show off all your potential if
                  it{"'"}s not by designing a website for your own agency or web
                  studio.
                </h4>
              </GridItem>
              <GridItem
                xs={12}
                sm={10}
                md={10}
                className={classNames(classes.mlAuto, classes.mrAuto)}
              >
                <Card raised className={classes.card}>
                  <CardBody formHorizontal>
                    <form>
                      <GridContainer>
                        <GridItem xs={12} sm={3} md={3}>
                          <CustomInput
                            id="name"
                            inputProps={{
                              placeholder: "Company name"
                            }}
                            formControlProps={{
                              fullWidth: true,
                              className: classes.formControl
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={3} md={3}>
                          <CustomInput
                            id="email"
                            inputProps={{
                              placeholder: "Company email"
                            }}
                            formControlProps={{
                              fullWidth: true,
                              className: classes.formControl
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={3} md={3}>
                          <CustomInput
                            id="password"
                            inputProps={{
                              placeholder: "Company password",
                              type: "password",
                              autoComplete: "off"
                            }}
                            formControlProps={{
                              fullWidth: true,
                              className: classes.formControl
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={3} md={3}>
                          <Button
                            block
                            color="primary"
                            className={classes.button}
                          >
                            Sign up
                          </Button>
                        </GridItem>
                      </GridContainer>
                    </form>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      {/* HEADER 2 END */}

      
      
    </div>
  );
}
