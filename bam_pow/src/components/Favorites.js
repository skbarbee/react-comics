import React, { useEffect, useState } from "react";
import { Card, Icon, Image, Container, Button, Grid } from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";
import { favoritesIndex } from "../api/favorites";
import { faV } from "@fortawesome/free-solid-svg-icons";

const Favorites = ({ user, msgAlert }) => {
  const [favorites, setFavorites] = useState(null);

  useEffect(() => {
    favoritesIndex(user)
      .then((res) => {
        console.log("the res", res.data);
        setFavorites(res.data.favorites[0]);
      })
      .catch((error) => {
        msgAlert({
          heading: "Failure",
          message: "Index Favorites Failure" + error,
          variant: "danger",
        });
      });
  }, []);
  console.log("this is favorites in favorites", favorites);

  if (!favorites) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1 className="comic-panel-font" textAlign="center">
        My Favorites
      </h1>
      
        <Grid.Row columns={2}>
          <Card.Group>
            <Card centered>
              <Card.Header className="comic-panel-link"> Authors</Card.Header>
              <Card.Content>
                {favorites.favorite_authors.map((author) => (
                  <h4>{author}</h4>
                ))}
              </Card.Content>
            </Card>
            <Card centered>
              <Card.Header className="comic-panel-link"> Characters</Card.Header>
              <Card.Content>
                {favorites.favorite_characters.map((character) => (
                  <h4>{character}</h4>
                ))}
              </Card.Content>
            </Card>
			<Card centered>
              <Card.Header className="comic-panel-link"> illustrators </Card.Header>
              <Card.Content>
                {favorites.favorite_illustrators.map((illustrator) => (
                  <h4>{illustrator}</h4>
                ))}
              </Card.Content>
            </Card>
			<Card centered>
              <Card.Header className="comic-panel-link"> Publishers </Card.Header>
              <Card.Content>
                {favorites.favorite_publishers.map((publisher) => (
                  <h4>{publisher}</h4>
                ))}
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Row>
      
    </>
  );
};

export default Favorites;
