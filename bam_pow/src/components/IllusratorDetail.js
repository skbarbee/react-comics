import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Card, Container, Image, Button, Form } from "semantic-ui-react"

import { illustratorShow, illustratorUpdate, illustratorDelete } from "../api/illustrator"

const IllustratorDetail = (props) => {
    const { user , msgAlert } = props

    const [Illustrator, setIllustrator] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    const [deleted, setDeleted] = useState(false)

    useEffect(() => {
        illustratorShow(user, id)
            .then((res) => {
                setIllustrator(res.data.illustrator)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Show Illustrator Failure' + error,
                    variant: 'danger'
                })
            })
    }, [])

    const handleChange = (e, target) => {
        setIllustrator(prevIllustrator => {
            const { name, value } = target
            const updatedName = e.target.name
            let updatedValue = e.target.value

            const updatedIllustrator = { [updatedName]: updatedValue }

            return { ...prevIllustrator, ...updatedIllustrator }
        })
    }

    const handleUpdateIllustrator = (e) => {
        e.preventDefault()

        illustratorUpdate(Illustrator, user, Illustrator.id)
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: 'Created Illustrator',
                    variant: 'success'
                })
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Create Illustrator Failure' + error,
                    variant: 'danger'
                })
            })
    }

    const handleDeleteIllustrator = () => {
        illustratorDelete(user, id)
        .then(() => {
            setDeleted(true)
            msgAlert({
                heading: 'Success',
                message: 'Deleting an Illustrator',
                variant: 'success'
            })
            
        })
		.then(() => {navigate('/illustrators')})
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Deleting an Illustrator Failure' + error,
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
							<Card.Header>{Illustrator.first_name} {Illustrator.last_name}</Card.Header>
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
                            <Form size="big">
                                <h1 className="comic-panel-font">
                                    Update Illustrator!
                                </h1>
                                <Form.Input
                                    required
                                    fluid
                                    label="First Name"
                                    placeholder="First Name"
                                    onChange={handleChange}
                                    name="first_name"
                                    value={Illustrator.first_name}
                                />
                                <Form.Input 
                                    required
                                    fluid
                                    label="Last Name"
                                    placeholder="Last Name"
                                    onChange={handleChange}
                                    name="last_name"
                                    value={Illustrator.last_name}
                                />
                            <Form.Button color="green" onClick={handleUpdateIllustrator}>
                                    Update
                            </Form.Button>
                            </Form>
                        </Container>
						<Container className = "comic-panel">
							<h1 className="comic-panel-font">Delete this Illustrator</h1>
							<Button 
								color="red" 
								onClick={handleDeleteIllustrator}
								>Delete Illustrator
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

export default IllustratorDetail