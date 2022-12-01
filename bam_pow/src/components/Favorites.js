import React, { useEffect, useState } from 'react' 
import { useNavigate, Link } from "react-router-dom"
import { favoritesIndex } from "../api/favorites"

const Favorites = ({user, msgAlert}) => {
console.log('this is the user in Favorite', user)
	const [allFavorites, setAllFavorites]= useState([])

	// useEffect(() => {
    //     favoritesIndex(user)
    //     .then(res => {
    //         setAllFavorites(res.data.favorites)
	// 		console.log('This is the res from favorites', res.data)
    //     })
    //     .catch((error) => {
    //         msgAlert({
    //             heading: 'Failure',
    //             message: 'Index Favorites Failure' + error,
    //             variant: 'danger'
    //         })
    //     })
    // }, [])

	return (
		<>
			<h1 className="comic-panel-font">My Favorites</h1>
			<h2>
				<Link to="/" className="comic-panel-link">
					Authors
				</Link>
			</h2>
			<h2>
				<Link to="/" className="comic-panel-link">
					Illustrators
				</Link>
			</h2>
			<h2>
				<Link to="/" className="comic-panel-link">
					Characters
				</Link>
			</h2>
		</>
	)
}

export default Favorites
