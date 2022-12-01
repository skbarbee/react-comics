import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Card, Container, Image, Button, Form } from "semantic-ui-react"

import { publisherShow, publisherUpdate, publisherDelete } from "../api/publisher"

const PublisherDetail = (props) => {
    const { user , msgAlert } = props

    const [Publisher, setPublisher] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    const [deleted, setDeleted] = useState(false)

    useEffect(() => {
        publisherShow(user, id)
            .then((res) => {
                setPublisher(res.data.publisher)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Show Publisher Failure' + error,
                    variant: 'danger'
                })
            })
    }, [])

    const handleChange = (e, target) => {
        setPublisher(prevPublisher => {
            const { name, value } = target
            const updatedName = e.target.name
            let updatedValue = e.target.value

            const updatedPublisher = { [updatedName]: updatedValue }

            return { ...prevPublisher, ...updatedPublisher }
        })
    }

    const handleUpdatePublisher = (e) => {
        e.preventDefault()

        publisherUpdate(Publisher, user, Publisher.id)
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: 'Created Publisher',
                    variant: 'success'
                })
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Create Publisher Failure' + error,
                    variant: 'danger'
                })
            })
    }

    const handleDeletePublisher = () => {
        publisherDelete(user, id)
        .then(() => {
            setDeleted(true)
            msgAlert({
                heading: 'Success',
                message: 'Deleting an Publisher',
                variant: 'success'
            })
            
        })
		.then(() => {navigate('/publishers')})
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Deleting an Publisher Failure' + error,
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
							<Card.Header>{Publisher.publisher_name}</Card.Header>
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
                                    Update Publisher!
                                </h1>
                                <Form.Input
                                    required
                                    fluid
                                    label="Publisher Name"
                                    placeholder="Publisher Name"
                                    onChange={handleChange}
                                    name="publisher_name"
                                    value={Publisher.publisher_name}
                                />
                            <Form.Button color="green" onClick={handleUpdatePublisher}>
                                    Update
                            </Form.Button>
                            </Form>
                        </Container>
						<Container className = "comic-panel">
							<h1 className="comic-panel-font">Delete this Publisher</h1>
							<Button 
								color="red" 
								onClick={handleDeletePublisher}
								>Delete Publisher
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

export default PublisherDetail

