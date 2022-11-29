import React, { useEffect, useState } from 'react' 
import { Card, Icon, Image, Container } from 'semantic-ui-react'

import { illustratorIndex } from '../api/illustrator'

const IllustratorIndex = ({ user, msgAlert}) => {

    const [allIllustrators, setAllIllustrators] = useState([])

    useEffect(() => {
        illustratorIndex(user)
        .then(res => {
            setAllIllustrators(res.data.illustrators)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Illustrators Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const IllustratorCards = allIllustrators.map(Illustrator => (
        <Card>
            <Image src={Illustrator.cover} wrapped ui={false} />
            <Card.Content>
                <Card.Header>
                    {Illustrator.illustrator_name}
                </Card.Header>
            </Card.Content>

            {/* extra content for the bottom to link to just that line of illustrators or something */}
            {/* Maybe we should have a main character listed so we can say "Iron man appears in 'x' other issues" */}
            {/* <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {Illustrator.name} appears in {Illustrator.editions} editions
                </a>
            </Card.Content> */}
        </Card>
    ))

    return (
        <Container className='comic-panel'>
            <Card.Group itemsPerRow={5}>
                { IllustratorCards }
            </Card.Group>
        </Container>

    )
}

export default IllustratorIndex