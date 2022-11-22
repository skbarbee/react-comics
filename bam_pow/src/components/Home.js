import logo from "../imgs/bampowlogo.png"
import comicBg from "../imgs/loginpage.svg"
import { Button } from "semantic-ui-react"
import { Link } from "react-router-dom"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log("props in home", props)

	return (
		<div
			className="home"
			style={{
				"background-image": `url(${comicBg})`,
			}}
		>
			<div className="home-content">
				<p className="center">Welcome to</p>
				<img className="logo" src={logo} />
			</div>
			<div className="home-buttons">
				<Link to="/sign-in">
					<Button primary>Sign In</Button>
				</Link>
				<Link to="/sign-up">
					<Button secondary>Sign Up</Button>
				</Link>
			</div>
		</div>
	)
}

export default Home
