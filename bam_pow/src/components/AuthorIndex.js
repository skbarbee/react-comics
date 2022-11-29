import React, { useEffect, useState } from 'react' 
import { Card, Icon, Image, Container } from 'semantic-ui-react'

import { authorIndex } from '../api/author'

const AuthorIndex = ({ user, msgAlert}) => {

    const [allAuthors, setAllAuthors] = useState([])

    useEffect(() => {
        authorIndex(user)
        .then(res => {
            setAllAuthors(res.data.authors)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Authors Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const AuthorCards = allAuthors.map(Author => (
        <Card>
            <Image src={Author.cover} wrapped ui={false} />
            <Card.Content>
                <Card.Header>
                    {Author.first_name} {Author.last_name}
                </Card.Header>
            </Card.Content>

            {/* extra content for the bottom to link to just that line of authors or something */}
            {/* Maybe we should have a main character listed so we can say "Iron man appears in 'x' other issues" */}
            {/* <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {Author.name} appears in {Author.editions} editions
                </a>
            </Card.Content> */}
        </Card>
    ))

    return (
        <Container className='comic-panel'>
            <Card.Group itemsPerRow={5}>
                { AuthorCards }
            </Card.Group>
        </Container>

    )
}

export default AuthorIndex