import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Card, Container, Image, Button } from "semantic-ui-react"
import { publisherShow, publisherUpdate } from "../api/publisher"

const PublisherDetail = (user, msgAlert) => {
	const [published, setPublished] = useState(null)
	const [publisherName, setPublisherName] = useState(null)

	const { id } = useParams()

	useEffect(() => {
		publisherShow(user, id)
        .then((res) => {
			setPublished(res.data.published)
			setPublisherName(res.data.publisher.publisher_name)
			console.log("after set", published)
			console.log(publisherName)
		})
	}, [])

	let allPublished
	let pubName

	if (published === null) {
		allPublished = <>nothing</>
	} else {
		allPublished = published.map((pubs, index) => (
			// console.log(titles.title)
			<Card key={index}>
				<h1>{pubs.title}</h1>
			</Card>
		))
	}
	if (publisherName === null) {
		pubName = "no such pub"
	} else {
		pubName = publisherName
	}

	return (
		<Container className="comic-panel">
			<Link to="/publishers">
				{" "}
				<Button>Back to All Publishers</Button>
			</Link>

			<h1 className="comic-panel-font">Titles published by {pubName}</h1>
			{allPublished}
		</Container>
	)
}

export default PublisherDetail
