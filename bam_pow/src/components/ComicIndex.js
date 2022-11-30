import React, { useEffect, useState } from 'react' 
import { Card, Icon, Image, Container } from 'semantic-ui-react'

import { comicIndex } from '../api/comic'

const ComicIndex = ({ user, msgAlert}) => {

    const [allComics, setAllComics] = useState([])

    useEffect(() => {
        comicIndex(user)
        .then(res => {
            setAllComics(res.data.comic_books)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Comics Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const ComicCards = allComics.map(Comic => (
        <Card href={"/comics/" + Comic.id}>
            <Image src={Comic.cover} wrapped ui={false} />
            <Card.Content>
                <Card.Header>
                    {Comic.title}
                </Card.Header>

                <Card.Meta>
                    {Comic.release_date}
                </Card.Meta>

                <Card.Description>
                    Edition {Comic.edition}
                </Card.Description>

            </Card.Content>

            {/* extra content for the bottom to link to just that line of comics or something */}
            {/* Maybe we should have a main character listed so we can say "Iron man appears in 'x' other issues" */}
            {/* <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {Comic.name} appears in {Comic.editions} editions
                </a>
            </Card.Content> */}
        </Card>
    ))

    return (
        <Container className='comic-panel'>
            <Card.Group itemsPerRow={5}>
                { ComicCards }
            </Card.Group>
        </Container>

    )
}

export default ComicIndex