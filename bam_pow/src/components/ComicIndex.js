import React, { useEffect, useState } from 'react' 
import { Card, Icon, Image } from 'semantic-ui-react'

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

    // const ComicCards = allComics.map(Comic => (
    //     <Card key={ Comic.id } style={{ width: '30%', margin: 5 }}>
    //         <Card.Header>{ Comic.fullTitle }</Card.Header>
    //         <Card.Body>
    //             <Card.Text>
    //                 <Link to={ `/Comics/${Comic.id}` }>View { Comic.name }</Link>
    //             </Card.Text>
    //         </Card.Body>
    //     </Card>
    // ))

    return (
        <>
            {/* <div className='container-md' style={ cardContainerLayout }>
                { ComicCards }
            </div> */}

            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Nick</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Nick turned into spiderman after he was bitten by a radoiactive spider
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    Appears in 5 editions
                </a>
                </Card.Content>
            </Card>
        </>

    )
}

export default ComicIndex