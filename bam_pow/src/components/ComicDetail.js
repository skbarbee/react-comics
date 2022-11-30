import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Card, Container, Image } from "semantic-ui-react"

import { comicShow } from "../api/comic"

const ComicDetail = (user, msgAlert) => {
    const [Comic, setComic] = useState([])
    // const [isUpdateShown, setIsUpdateShown] = useState(false)
    // const [editModalShow, setEditModalShow] = useState(false)
    // const [toyModalShow, setToyModalShow] = useState(false)
    // const [deleted, setDeleted] = useState(false)
    // const [updated, setUpdated] = useState(false)

    const { id } = useParams()
    // const navigate = useNavigate()

    useEffect(() => {
        comicShow(user, id)
            .then((res) => {
                setComic(res.data.comic_book)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Show Comic Failure' + error,
                    variant: 'danger'
                })
            })
    }, [])

	return (
		<>
			<Container>
				<div className="comic-panel comic-detail">
					<Card.Group itemsPerRow={2}>
					<Card>
						<Image
							
							src={Comic.cover}
							wrapped
							ui={false}
						/>
					</Card>
					<Card>
						<Card.Content>
							<Card.Header>{Comic.title}</Card.Header>
							More about this comic
							<br />
							Illustrator: {Comic.illustrators}
							<br />
							Author: {Comic.authors}
							<br />
							Publisher: {Comic.publisher}
							<br />
							Character also appears in: TBD
						</Card.Content>
					</Card>
					</Card.Group>
				</div>
			</Container>


		</>
	)
}

export default ComicDetail
