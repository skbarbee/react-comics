import React, { useEffect, useState } from "react"
import { Card, Icon, Image, Container, Button } from "semantic-ui-react"
import { Link } from "react-router-dom"

import { characterIndex } from "../api/character"

const CharacterIndex = ({ user, msgAlert }) => {
	const [allCharacters, setAllCharacters] = useState([])
	const [liked, setLiked] = useState(false)
	console.log(user)

	useEffect(() => {
		characterIndex(user)
			.then((res) => {
				setAllCharacters(res.data.characters)
			})
			.catch((error) => {
				msgAlert({
					heading: "Failure",
					message: "Index Characters Failure" + error,
					variant: "danger",
				})
			})
	}, [])

	const handleLike = () => {
		setLiked(true)
		console.log("liked")
	}
	let heart

	if (liked === true) {
		heart = <Icon className="heart"></Icon>
	} else {
		heart = <Icon className="heart outline"></Icon>
	}

	const CharacterCards = allCharacters.map((Character) => (
		<Card>
			<Image src={Character.imageurl} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{Character.alias}</Card.Header>

				<Card.Meta>
					{Character.real_name}
					{/* <span className='date'>{Character.releasedate}</span> */}
				</Card.Meta>

				<Card.Description>{Character.details}</Card.Description>
			</Card.Content>

			{/* extra content for the bottom to link to just that line of characters or something */}
			{/* Maybe we should have a main character listed so we can say "Iron man appears in 'x' other issues" */}
			<Card.Content extra>
				<a>
					<Icon name="user" />
					{Character.alias} appears in 'this # of'{Character.editions}{" "}
					comics
				</a>
			</Card.Content>
			<Card.Content>
				<div className="ui two buttons">
					<Button.Group>
						<Button icon link onClick={handleLike}>
							{heart}
						</Button>

						<Link to={`/characters/${Character.id}`}>
							<Button primary>View author</Button>
						</Link>
					</Button.Group>
				</div>
			</Card.Content>
		</Card>
	))

	return (
		<>
			<Container className="comic-panel">
				<Card.Group>{CharacterCards}</Card.Group>
			</Container>
		</>
	)
}

export default CharacterIndex
