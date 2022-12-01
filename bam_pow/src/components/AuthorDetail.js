import React, { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { Card, Container, Image, Button } from "semantic-ui-react"
import { authorShow } from "../api/author"

const AuthorDetail = (user, msgAlert) => {
	const [written, setWritten] = useState([])
	const [author, setAuthor] = useState(null)
	const { id } = useParams()
	console.log(id)

	useEffect(() => {
		authorShow(user, id)
			.then((res) => {
				console.log("written", res.data.written)
				console.log(res.data.author)
				setAuthor(res.data.author)
				setWritten(res.data.written)
			})

			.catch((error) => {
				msgAlert({
					heading: "Failure",
					message: "Detail Authors Failure" + error,
					variant: "danger",
				})
			})
	}, [])
    let allWritten
    let authorName
	if (written === []) {
        allWritten = <>nothing</>
	} else {
		allWritten = written.map((titles) => (
			// console.log(titles.title)
			<Card>
				<h1>{titles.title}</h1>
			</Card>
		))
	}
    if (author === null) {
        authorName = "no such author"
    } else {
        authorName = ` ${author.first_name}  ${author.last_name}`
    }
	return (
		<Container className="comic-panel">
            <Link to='/authors'> <Button>Back to All Authors</Button></Link>
			<h1 className="comic-panel-font">
				Titles written by
				{authorName}
			</h1>
			{allWritten}
		</Container>
	)
}

export default AuthorDetail
