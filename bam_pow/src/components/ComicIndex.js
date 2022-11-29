import React, { useEffect, useState } from 'react' 
import { Card, Icon, Image, Container } from 'semantic-ui-react'

const ComicIndex = ({ user, msgAlert}) => {

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
                title: "Title",
                imageurl: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
                releasedate: '12-12-2022',
                issue: 5,
                editions: 6 
            },
            {
                title: "Title2",
                imageurl: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
                releasedate: '12-12-2022',
                issue: 5,
                editions: 6 
            },
            {
                title: "Title3",
                imageurl: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
                releasedate: '12-12-2022',
                issue: 5,
                editions: 6 
            }
        ])
    }, [])


    const ComicCards = allComics.map(Comic => (


        <Card>
            <Image src={Comic.imageurl} wrapped ui={false} />
            <Card.Content style={{paddingTop: '0'}}>

                <Card.Meta>
                    {Comic.releasedate}
                    {/* <span className='date'>{Comic.releasedate}</span> */}
                </Card.Meta>

                <Card.Header>
                    {Comic.title}
                </Card.Header>



                <Card.Description style={{marginTop: '0'}}>
                    Issue {Comic.issue}
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
        <>
            <h1 className='edo-header' style={{color: 'white', fontSize: "60px", margin: "0, 0, 0, 0" }}>All Comics</h1>
            <Container className='comic-panel'>
                <Card.Group itemsPerRow={5}>
                    { ComicCards }
                </Card.Group>
            </Container>
        </>

    )
}

export default ComicIndex