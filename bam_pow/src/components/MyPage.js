import React from "react"
import { Button, Card, Image, Container, Grid } from "semantic-ui-react"
// import { Button } from 'semantic-ui-css'
import comicBg from "../imgs/loginpage.svg"
// import components for
import Favorites from "./Favorites"

const MyPage = () => {
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
							<Favorites />
						</div>
					</Grid.Column>
				</Grid>
			</Container>
		</div>
	)
}

export default MyPage
