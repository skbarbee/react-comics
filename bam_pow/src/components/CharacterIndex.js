import React, { useEffect, useState } from 'react' 
import { Card, Container, Icon, Image } from 'semantic-ui-react'

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
        setAllComics( [
            {
                alias: "Iron Man",
                real_name: "Tony Stark",
                imageurl: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
                details: 'Billionaire Playboy Philanthropist'
            },
            {
                alias: "Winter Soldier",
                real_name: "Bucky Barnes",
                imageurl: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
                details: 'What the hell happened to my arm??'
            },
            {
                alias: "Captain Marvel",
                real_name: "Carol Danvers",
                imageurl: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
                details: 'Crashed ship go brrrrrr'
            },
            {
                alias: "Spiderman",
                real_name: "Peter Parker",
                imageurl: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
                details: 'I was bit by a radioactive spider, oops'
            },
            {
                alias: "Thor",
                real_name: "Liam Hemsworth",
                imageurl: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
                details: "It's hammer time"
            },
            {
                alias: "Black Widow",
                real_name: "Natasha Romanova",
                imageurl: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
                details: 'what soul stone?'
            },
        ])
    },[])

    const CharacterCards = allCharacters.map(Character => (
        <Card>

            <Image src={Character.imageurl} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{Character.alias}</Card.Header>
                <Card.Meta>
                    {Character.real_name}
                    {/* <span className='date'>{Character.releasedate}</span> */}
                </Card.Meta>
                
                <Card.Header>{Comic.alias}</Card.Header>

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

        <>  
            <h1 className='edo-header' style={{color: 'white', fontSize: "60px", margin: "0, 0, 0, 0" }}>Characters</h1>
            <Container className='comic-panel'>
                <Card.Group itemsPerRow={4}>
                    { ComicCards }
                </Card.Group>
            </Container>

        </>

    )
}

export default CharacterIndex