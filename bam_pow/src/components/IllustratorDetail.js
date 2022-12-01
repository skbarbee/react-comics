import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Card, Container, Image, Button } from "semantic-ui-react"
import { illustratorShow } from "../api/illustrator"

const IllustratorDetail = (user, msgAlert) => {
	const [illustrated, setIllustrated] = useState(null)
	const [illustratorName, setIllustratedName] = useState(null)

	const { id } = useParams()

	useEffect(() => {
		illustratorShow(user, id)
        .then((res) => {
			console.log("res",res.data)
			setIllustrated(res.data.illustrated)
			setIllustratedName(res.data.illustrator)
			console.log(illustrated)
			console.log(illustratorName)
		})

	}, [])

    let allIllustrated
	let fullName

	if (illustrated === null) {
		allIllustrated = <>nothing</>
	} else {
		allIllustrated = illustrated.map((illo) => (

			<Card>
				<h1>{illo.title}</h1>
			</Card>
		))
	}
    console.log(illustratorName)
	if (illustratorName === null) {
		fullName = "no such illustrator"
	} else {
		fullName = ` ${illustratorName.first_name}  ${illustratorName.last_name}`
	}

	return (
		<Container className="comic-panel">
			<Link to="/illustrators">
				{" "}
				<Button>Back to All Illustrators</Button>
			</Link>

            <h1 className="comic-panel-font">Titles illustrated by {fullName}</h1>
            {/* {allIllustrated} */}
		</Container>
	)
}

export default IllustratorDetail
