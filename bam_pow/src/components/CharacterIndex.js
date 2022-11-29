import React, { useEffect, useState } from 'react' 
import { Card, Icon, Image, Container } from 'semantic-ui-react'

import { characterIndex } from '../api/character'

const CharacterIndex = ({ user, msgAlert}) => {

    const [allCharacters, setAllCharacters] = useState([])

    useEffect(() => {
        characterIndex(user)
        .then(res => {
            setAllCharacters(res.data.characters)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Characters Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const CharacterCards = allCharacters.map(Character => (
        <Card href={"/charcaters/" + Character.id}>
            <Image src={Character.imageurl} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{Character.alias}</Card.Header>

                <Card.Meta>
                    {Character.real_name}
                    {/* <span className='date'>{Character.releasedate}</span> */}
                </Card.Meta>

                <Card.Description>
                    {Character.details}
                </Card.Description>

            </Card.Content>

            {/* extra content for the bottom to link to just that line of characters or something */}
            {/* Maybe we should have a main character listed so we can say "Iron man appears in 'x' other issues" */}
            <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {Character.alias} appears in 'this # of'{Character.editions} comics
                </a>
            </Card.Content>
        </Card>
    ))


    return (
        <>
            <Container className='comic-panel'>
                <Card.Group itemsPerRow={4}>
                    { CharacterCards }
                </Card.Group>
            </Container>
        </>

    )
}

export default CharacterIndex