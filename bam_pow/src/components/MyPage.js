import React from "react"
import { Button, Card, Image, Container, Grid } from "semantic-ui-react"
// import { Button } from 'semantic-ui-css'
import comicBg from "../imgs/loginpage.svg"

const MyPage = () => {
	return (
		<div
			style={{
				"background-image": `url(${comicBg})`,
				"background-size": "cover",
				height: "100vh",
				overflow: "scroll",
			}}
		>
			<Container>
				<Grid stackable>
					<Grid.Column height={15} width={16}></Grid.Column>
					{/* <img src={comicBg}/> */}
					<Grid.Column floated="left" width={7}>
					<div className="comic-panel">
							<h1 className="comic">My Collection</h1>
						</div>
					</Grid.Column>
					<Grid.Column floated="right" width={7}>
						<div className="comic-panel">
							<h1 className="comic">To Be Read</h1>
						</div>
					</Grid.Column>
				</Grid>
			</Container>
		</div>
	)
}

export default MyPage
