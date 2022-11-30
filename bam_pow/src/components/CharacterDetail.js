import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Card, Container, Image } from "semantic-ui-react"

import { characterShow } from "../api/character"

const CharacterDetail = (user, msgAlert) => {
    const [Character, setCharacter] = useState([])
    // const [isUpdateShown, setIsUpdateShown] = useState(false)
    // const [editModalShow, setEditModalShow] = useState(false)
    // const [toyModalShow, setToyModalShow] = useState(false)
    // const [deleted, setDeleted] = useState(false)
    // const [updated, setUpdated] = useState(false)

    const { id } = useParams()
    // const navigate = useNavigate()

    useEffect(() => {
        characterShow(user, id)
            .then((res) => {
                setCharacter(res.data.character)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Show Character Failure' + error,
                    variant: 'danger'
                })
            })
    }, [])

	return (
		<>
			<Container>
				<div className="comic-panel">
					<Card>
						<Card.Content>
							<Card.Header>{Character.title}</Card.Header>
                            <Card.Description>
                                {Character.real_name}
                            </Card.Description>
                            <Card.Description>
                                {Character.alias} 
                            </Card.Description>
                            <Card.Description>
                                {Character.details}
                            </Card.Description>
						</Card.Content>
					</Card>
					{/* </Card.Group> */}
				</div>
			</Container>
		</>
	)
}

export default CharacterDetail