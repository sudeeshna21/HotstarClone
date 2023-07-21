import React, { useEffect } from 'react';
import styled from 'styled-components'
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice'

const Home = () =>{
    const dispatch =  useDispatch()

    useEffect(()=>{
        async function getMovieList() {
            const moviesCol = db.collection('movies');
            const movieSnapshot = await moviesCol.get()
            const movieList = movieSnapshot.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            dispatch(setMovies(movieList))
          }
          getMovieList();
    },[])

    return(
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Movies/>
        </Container>
    )
}

export default Home;


const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before {
        background: url("/images/home-background.png") center center / cover 
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;

    }
`