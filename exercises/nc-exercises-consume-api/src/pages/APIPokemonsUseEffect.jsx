
import React, { Fragment, useState, useEffect } from 'react'

// Layouts
import LayoutDashboard from 'layouts/LayoutDashboard'

// Components
import Container from 'components/container'
import GridContainer from 'components/grid-container'
import Typography from 'components/typography'


const Pokemon = ({ avatar, name }) => {
    return (
        <figure>
            <img src={avatar} alt={name} />
            <figcaption> {name} </figcaption>
        </figure>
    );
}

const APIPokemonsUseEffect = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {

        const getPokemons = async (url) => {
            let res = await fetch(url),
                json = await res.json();
            //console.log(json);

            json.results.forEach(async (el) => {
                let res = await fetch(el.url),
                    json = await res.json();

                //console.log(json);
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default,
                };

                setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        };

        getPokemons("https://pokeapi.co/api/v2/pokemon/");

        return () => {
            console.log('Limpiando')
        }

    }, [])

    return (
        <Fragment>
            <LayoutDashboard>
                <Container>
                    <GridContainer center>
                        <Typography h4 textPink500> API Pokemon useEffect - Fetch </Typography>
                    </GridContainer>

                    <GridContainer center>
                        {
                            pokemons.length === 0 ? (
                                <Typography> Cargando </Typography>
                            ) : (
                                pokemons.map((el) => (
                                    <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
                                ))
                            )
                        }
                    </GridContainer>
                </Container>
            </LayoutDashboard>

        </Fragment>
    )
}

export default APIPokemonsUseEffect
