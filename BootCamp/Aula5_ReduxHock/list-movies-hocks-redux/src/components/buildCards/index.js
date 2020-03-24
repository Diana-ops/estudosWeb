import React, { useState } from 'react';
import posterIt from '../../assets/poster.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css'
import './styleCards.css'

import BestMovies from '../best-movies/index'

function BuildCard(props) {

	const { movies } = props
	const [ values, setValues ] = useState("");

	return( 
		<>	
		    <div className="div-input">
	          <input
	            placeholder="Seach for a movie"
	            onChange={ event => setValues(event.target.value) }
	          />
	        </div>

	        <BestMovies movies={movies}/>
					
			<div className="table-card" style={{backgroundColor: "black"}}>
          
            { 
              movies.map((itemJson, id) => {

                var title = itemJson.title.toUpperCase()
                var actualySeach = values.toUpperCase()

                var thereAreMovie = title.indexOf(actualySeach) != -1

                if(thereAreMovie){
                  return (
                    <>
                
                        <div key={id} className="column">
                            
                            <li className="title-movie">{itemJson.title}</li>
                            <img className="img-poster" src={posterIt} alt="Poster do Filme It A Coisa"/>
                            
                      </div>
                    </>
                   
                  );
              }
              })
            }
          </div>

		</>
	);
}

export default BuildCard;
