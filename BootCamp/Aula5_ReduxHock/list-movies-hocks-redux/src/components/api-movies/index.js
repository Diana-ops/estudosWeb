import React,  { useState }  from 'react';

/*Componente*/
import BuildCard from '../buildCards/index'

/*Construção dos Cards*/
function ApiMovies(props) {

    const [ movies, setMovies ] = useState([])

    const URL_USE_FETCH = "https://ghibliapi.herokuapp.com/films"

    fetch(URL_USE_FETCH, {
      method: 'get'
    })
    .then(function(response) {
      return response.json()

    }).then(function(resp) {
      setMovies(resp)
    })

    .catch(function(err) {
      console.log(err)
    })

    return (
      <>     
          <BuildCard movies={movies}/>              
          
      </>
  );

}

export default ApiMovies;