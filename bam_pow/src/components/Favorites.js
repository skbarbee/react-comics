import React from "react"
import { useNavigate, Link } from "react-router-dom"

const Favorites = () => {
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
