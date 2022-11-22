import logo from '../imgs/bampowLogo.svg'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>Home Page</h2>
			<p>please log in!</p>
			<img src={logo} />
		</>
	)
}

export default Home
