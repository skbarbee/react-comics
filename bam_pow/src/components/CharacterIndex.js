import React, { useEffect, useState } from 'react' 
import { Card, Icon, Image } from 'semantic-ui-react'

const CharacterIndex = ({ user, msgAlert}) => {

    const [allComics, setAllComics] = useState([])

    // useEffect(() => {
    //     ComicIndex(user)
    //     .then(res => {
    //         setAllComics(res.data.Comics)
    //     })
    //     .catch((error) => {
    //         msgAlert({
    //             heading: 'Failure',
    //             message: 'Index Comics Failure' + error,
    //             variant: 'danger'
    //         })
    //     })
    // }, [])

    useEffect(() => {
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
    })


    const ComicCards = allComics.map(Comic => (
        <Card>
            <Image src={Comic.imageurl} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{Comic.alias}</Card.Header>

                <Card.Meta>
                    {Comic.real_name}
                    {/* <span className='date'>{Comic.releasedate}</span> */}
                </Card.Meta>

                <Card.Description>
                    {Comic.details}
                </Card.Description>

            </Card.Content>

            {/* extra content for the bottom to link to just that line of comics or something */}
            {/* Maybe we should have a main character listed so we can say "Iron man appears in 'x' other issues" */}
            <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {Comic.alias} appears in 'this # of'{Comic.editions} comics
                </a>
            </Card.Content>
        </Card>
    ))


    return (
        <>
            <Card.Group itemsPerRow={4}>
                { ComicCards }
            </Card.Group>
        </>

    )
}

export default CharacterIndex