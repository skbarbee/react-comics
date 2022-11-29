import React from "react"
import { Container, Grid, GridColumn } from "semantic-ui-react"
import { Navigate, Link } from "react-router-dom"

const Discover = () => {
	return (
		<>
			<Container className="comic-panel">
				<h1 className="comic-panel-font" id="center">Discover</h1>
				<Grid>
					<Grid.Row columns={2}>
						<Grid.Column>
                        <Link to='/' className="comic-panel-font">Publishers</Link>
						</Grid.Column>
						<Grid.Column>
                        <Link to='/' className="comic-panel-font">Characters</Link>
						</Grid.Column>
					</Grid.Row>

                    <Grid.Row columns={2}>
						<Grid.Column>
							<Link to='/' className="comic-panel-font">Authors</Link>
						</Grid.Column>
						<Grid.Column>
							<Link to='/' className="comic-panel-font">Illustrators</Link>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</>
	)
}

export default Discover
