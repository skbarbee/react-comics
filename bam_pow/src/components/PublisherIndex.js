import React, { useEffect, useState } from 'react' 
import { Card, Icon, Image, Container } from 'semantic-ui-react'

import { publisherIndex } from '../api/publisher'

const PublisherIndex = ({ user, msgAlert}) => {

    const [allPublishers, setAllPublishers] = useState([])

    useEffect(() => {
        publisherIndex(user)
        .then(res => {
            setAllPublishers(res.data.publishers)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Publishers Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const PublisherCards = allPublishers.map(Publisher => (
        <Card href={"/publishers/" + Publisher.id}>
            <Image src={Publisher.cover} wrapped ui={false} />
            <Card.Content>
                <Card.Header>
                    {Publisher.publisher_name}
                </Card.Header>
            </Card.Content>

            {/* extra content for the bottom to link to just that line of publishers or something */}
            {/* Maybe we should have a main character listed so we can say "Iron man appears in 'x' other issues" */}
            {/* <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {Publisher.name} appears in {Publisher.editions} editions
                </a>
            </Card.Content> */}
        </Card>
    ))

    return (
        <Container className='comic-panel'>
            <Card.Group itemsPerRow={5}>
                { PublisherCards }
            </Card.Group>
        </Container>

    )
}

export default PublisherIndex