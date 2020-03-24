import React from 'react'

import { Section } from '../../components/section/index'
import  ApiMovies from '../../components/api-movies/index'
import { Footer } from '../../components/footer/index'

import './style.css'

function Home() { 

	return (
		<>
			<Section/>
			<ApiMovies/>
			<Footer/>
		</>
	);

}


export default Home;