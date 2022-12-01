import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Card, Container, Image, Button, Form } from "semantic-ui-react"

import { characterShow, characterUpdate, characterDelete } from "../api/character"

const CharacterDetail = (props) => {
    const { user , msgAlert } = props

    const [Character, setCharacter] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    const [deleted, setDeleted] = useState(false)

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


    const handleDeleteCharacter = () => {
        characterDelete(user, id)
        .then(() => {
            setDeleted(true)
            msgAlert({
                heading: 'Success',
                message: 'Deleting an Character',
                variant: 'success'
            })
            
        })
		.then(() => {navigate('/authors')})
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Deleting an Character Failure' + error,
                variant: 'danger'
            })
        })
    }
console.log(user)
	return (
		<>
			<Container className = "comic-panel">
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
			</Container>

            {
				user !== null
				?
					user.staff === true
					?
					<>
						<Container className = "comic-panel">
							<h1 className="comic-panel-font">Delete this Character</h1>
							<Button 
								color="red" 
								onClick={handleDeleteCharacter}
								>Delete Character
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

export default CharacterDetail