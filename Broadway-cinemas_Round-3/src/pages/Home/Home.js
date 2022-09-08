import { Box, Grid, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Home/Carousel';
import PageLayout from '../../components/Layout/PageLayout/PageLayout';
import moviesData from '../../data/movies.json';
import styles from './Home.module.css';

const Home = () => {
    return(
        <PageLayout>
            <div>
                <Carousel />
            </div>
            <Box marginTop="2em">
                <Typography variant='h6'>Currently Playing</Typography>
                <Box marginTop='0.5em'>
                    <Grid container spacing={2}>
                        {moviesData.movies.map((movie, i)=>(
                            <Grid item lg={2} md={3} sm={4} xs={6} key={i}>
                                <Link to={`/details/${movie.title}`}>
                                    <div className={styles['movie-card']} style={{backgroundImage: `url(${movie.img.thumbnail})`}}></div>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </PageLayout>
    )
}

export default Home;

