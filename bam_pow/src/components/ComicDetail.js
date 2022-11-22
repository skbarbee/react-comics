import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Card, Container, Image } from "semantic-ui-react"

const ComicDetail = () => {
	// const comic [comic, setComic] = useState(null)
	// useEffect(()=> {
	//     getComic()
	//         .then(set the data)
	//         .catch(error)
	// } ,[])
	//  const { id } = useParams()

	return (
		<>
			<Container>
				<div className="comic-panel">
					<Card className="comic-detail">
						<Image
							
							src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
							wrapped
							ui={false}
						/>
						<Card.Header>Comic title</Card.Header>
						<Card.Content>
							More about this comic
							<br />
							Illustrator:
							<br />
							Author: <br />
							Character also appears in:
						</Card.Content>
					</Card>
				</div>
			</Container>
		</>
	)
}

export default ComicDetail
