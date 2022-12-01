import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Card, Container, Image, Button } from "semantic-ui-react"
import { authorShow, authorUpdate, authorDelete } from "../api/author"

const AuthorDetail = (props) => {
	const { user , msgAlert } = props
	const [written, setWritten] = useState([])
	const [author, setAuthor] = useState(null)
	const { id } = useParams()
	const [deleted, setDeleted] = useState(false)

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

	const navigate = useNavigate()

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

	const handleDeleteAuthor = () => {
        authorDelete(user, id)
        .then(() => {
            setDeleted(true)
            msgAlert({
                heading: 'Success',
                message: 'Deleting an Author',
                variant: 'success'
            })
            
        })
		.then(() => {navigate('/authors')})
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Deleting an Author Failure' + error,
                variant: 'danger'
            })
        })
    }

	return (
		<>
			<Container className="comic-panel">
				<h1 className="comic-panel-font">
					Titles written by
					{authorName}
				</h1>
				{allWritten}
			</Container>
			{
				user !== null
				?
					user.staff === true
					?
					<>
						<Container className = "comic-panel">
							<h1 className="comic-panel-font">Delete this Author</h1>
							<Button 
								color="red" 
								onClick={handleDeleteAuthor}
								>Delete Author
							</Button>
						</Container>					
					</>
					:
					null
				:
				null
			}
		</>
	)
}

export default AuthorDetail
