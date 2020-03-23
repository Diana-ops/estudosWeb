import React from 'react';
import { BuildCard } from './components/buildCards/index'

/*Construção dos Cards*/
export function ApiMovies() {

  const [ movies, setMovies ] = React.useState([])

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
    <div className="App">
      <h1>Lista de Filmes</h1>
      { 
        movies.map(itemJson => {
          return (
            <BuildCard 
              key={itemJson.id}
              title={itemJson.title}
              description={itemJson.description}
            />
          );
        })
      }
    </div>
  );

}