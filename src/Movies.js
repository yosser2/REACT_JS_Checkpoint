import React from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Movies() {
    const movies = [
        {
            Image:'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg',
            title:'Oppenheimer'
            
        },
        {
            Image:'https://m.media-amazon.com/images/M/MV5BNTBlNmEwNzQtZTc5MC00YmVjLTk5NjgtMmM0NDFmZjJkZjYzXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg',
            title:'Lift'
        },
        {
            Image:'https://m.media-amazon.com/images/M/MV5BNTM0YTBlMjctZjJjZS00MDU4LTg5YmQtMDY5Y2FhMWZiMjQ2XkEyXkFqcGdeQXVyNzU0NzQxNTE@._V1_.jpg',
            title:'Ferrari'
        }
    ]
  return (
    movies.map((movie)=>{
        return (
           
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.Image} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              
              <Button variant="primary">Watch Now</Button>
            </Card.Body>
          </Card>
        )
    })
  )
}

export default Movies