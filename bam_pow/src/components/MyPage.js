import React, { useState, useEffect } from "react"
import { Button, Card, Image, Container, Grid } from "semantic-ui-react"
// import { Button } from 'semantic-ui-css'
import comicBg from "../imgs/loginpage.svg"
// import components for
import Favorites from "./Favorites"
import { favoritesIndex } from "../api/favorites"

const MyPage = ({ user, msgAlert }) => {
	const [favorites, setFavorites] = useState(null)

	useEffect(() => {
		favoritesIndex(user)
			.then((res) => {
				console.log("the res",res.data)
				setFavorites(res.data.favorites[0])
			})
			.catch((error) => {
				msgAlert({
					heading: "Failure",
					message: "Index Favorites Failure" + error,
					variant: "danger",
				})
			})
	},[])
	console.log("the faves", favorites)
	return (
		<div>
			<Container>
				<Grid stackable>
					<Grid.Column height={15} width={16}></Grid.Column>

					<Grid.Column floated="left" width={7}>
						<div className="comic-panel">
							<h1 className="comic-panel-font">My Collection</h1>
							<p>All my read books</p>
						</div>
					</Grid.Column>
					<Grid.Column floated="right" width={7}>
						<div className="comic-panel">
							<h1 className="comic-panel-font">To Be Read</h1>
							<p>Books I want to read</p>
						</div>
					</Grid.Column>
					<Grid.Column floated="center" width={7}>
						<div className="comic-panel">
							<Favorites user={user} msgAlert={msgAlert}
							favorites={favorites}
							/>
						</div>
					</Grid.Column>
				</Grid>
			</Container>
		</div>
	)
}

export default MyPage
