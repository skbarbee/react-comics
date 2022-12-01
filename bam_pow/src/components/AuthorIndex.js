import React, { useEffect, useState } from "react"
import { Card, Icon, Image, Container, Button } from "semantic-ui-react"
import { Link } from 'react-router-dom'

import { authorIndex, authorShow } from "../api/author"
import { favoritesIndex } from "../api/favorites"

const AuthorIndex = ({ user, msgAlert }) => {
	const [allAuthors, setAllAuthors] = useState([])
	const [liked, setLiked] = useState(false)
	const [allFavorites, setAllFavorites]= useState([])
	console.log("user in author index",user)

	useEffect(() => {
        // authorShow(user, 1)
        //     .then((res) => {
        //         console.log(res.data)
        //     })
		// favoritesIndex(user)
        // .then(res => {
        //     setAllFavorites(res.data.favorites)
		// 	// console.log('This is the res from favorites in author', res.data)
		// 	// console.log("all faves",allFavorites)
        // })
		authorIndex(user)
			.then((res) => {
				setAllAuthors(res.data.authors)
                console.log(res.data)
			})
			.catch((error) => {
				msgAlert({
					heading: "Failure",
					message: "Index Authors Failure" + error,
					variant: "danger",
				})
			})
	}, [])

 
	// console.log("mapped",favorited.favorite_authors)

	const handleLike = () => {
		// setLiked(true)
		console.log("liked")
	}
	let heart

	if (liked === true) {
		heart = <Icon className="heart"></Icon>
	} else {
		heart = <Icon className="heart outline"></Icon>
	}



    /// set like function for the heart handle like posts

	const AuthorCards = allAuthors.map((Author) => (
		<Card center>
			<Image src={Author.cover} wrapped ui={false} />
			<Card.Content>
				<Card.Header>
					{Author.first_name} {Author.last_name}
				</Card.Header>
				<Card.Description></Card.Description>
			</Card.Content>
			<Card.Content>
				<div className="ui two buttons">
					<Button.Group>
						<Button icon link onClick={handleLike}>
                        {/* setLiked */}
							{heart}
						</Button>
						<Link to={`/authors/${Author.id}`}>
							<Button primary>View author</Button>
						</Link>
					</Button.Group>
				</div>
			</Card.Content>

			{/* extra content for the bottom to link to just that line of authors or something */}
			{/* Maybe we should have a main character listed so we can say "Iron man appears in 'x' other issues" */}
			{/* <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {Author.name} appears in {Author.editions} editions
                </a>
            </Card.Content> */}
		</Card>
	))

	return (
		<Container className="comic-panel">
			<Card.Group >{AuthorCards}</Card.Group>
		</Container>
	)
}

export default AuthorIndex
