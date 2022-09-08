import { Box, Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router';
import PageLayout from "../../components/Layout/PageLayout/PageLayout";
import movies from '../../data/movies.json';
import styles from './movieDetails.module.css';

function extractDuration(time){
    let hours = time/60;
    hours = parseInt(hours);
    const mins = time%60;

    return{hours, mins};
}

const MovieDetails = (props) => {
    const params = useParams();
    const movieData = movies.movies.filter((movie)=>movie.title === params.name)[0];

    const duration = extractDuration(parseInt(movieData.durationMins));
    return (  
        <PageLayout>
            <Box marginTop="1em">
                <Grid container alignItems='flex-end'>
                    <Grid item lg={4} spacing={2}>
                        <div className={styles['poster']}>
                            <img src={movieData.img.thumbnail} alt='movie-poster' width="90%" />
                        </div>
                    </Grid >
                    <Grid item lg={6}>
                        <div>
                            <Typography variant='h4'><b>{movieData.title}</b></Typography>
                            <Box padding='1em 0'>
                                <span style={{margin:'0 0.2em'}}>{duration.hours}h {duration.mins}m </span> |
                                <span style={{margin:'0 0.2em'}}>{movieData.genres.map((item)=>item.split(" ")[0]).toString()}</span> |
                                <span style={{margin:'0 0.2em'}}>{movieData.ageCertificate}</span>
                            </Box>
                            <Box padding='1em 0'>
                                <Typography variant='body1'><b>About the movie</b></Typography>
                                <Typography variant='body2'>{movieData.description}</Typography>
                            </Box>
                            <Box padding='1em 0'>
                                <Button variant='contained' color='secondary' disableElevation>Book Tickets</Button>
                            </Box>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </PageLayout>
    );
}

export default MovieDetails;