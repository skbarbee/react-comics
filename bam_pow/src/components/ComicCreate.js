import React, { useState, useEffect } from "react"
import { Form, Container } from "semantic-ui-react"
import { useNavigate } from "react-router-dom"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const ComicCreate = (props) => {
	const {msgAlert} = props

	const [comic, setComic] = useState({})

	const navigate = useNavigate()

	const [startDate, setStartDate] = useState(new Date())

	const handleChange = (e) => {
		console.log(e.target.value)
		setComic((prevComic) => {
			const name = e.target.name
			let value = e.target.value
			if (name === 'illustrators' && value.includes(",")){
				let str = value
				value = str.split(",")
			}
			if (name === 'authors' && value.includes(",")){
				let str = value
				value = str.split(",")
			}
			if (name === 'characters' && value.includes(",")){
				let str = value
				value = str.split(",")
			}
			const updatedComic = {
				[name]: value,
			}
			return {
				...prevComic,
				...updatedComic,
			}
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setComic((comic.releaseDate = startDate))

		console.log(comic)
		

		setComic((comic.releaseDate = startDate))
		console.log("the comic?", comic)
		// navigate('/mypage')

	}

	return (
		<Container>
			<div className="comic-panel">
				<Form>
					<h1 className="comic-panel-font">
						Add a comic to your collection!
					</h1>
					<Form.Input
						required
						fluid
						label="Title"
						placeholder="Title"
						onChange={handleChange}
						name="title"
					/>
					<Form.Input
						required
						fluid
						label="Author"
						placeholder="For multiple add commas e.g. (Hickman, Zdarsky)"
						onChange={handleChange}
						name="authors"
					/>
					<Form.Input
						required
						fluid
						label="Illustrator"
						placeholder="For multiple add commas e.g. (Mignola, Quinones)"
						onChange={handleChange}
						name="illustrators"
					/>
					<Form.Input
						fluid
						label="Publisher"
						placeholder="Publisher"
						onChange={handleChange}
						name="publisher"
					/>
					<Form.Input
						fluid
						label="Characters"
						placeholder="For multiple add commas e.g. (Batman, Poison Ivy)"
						onChange={handleChange}
						name="characters"
					/>
					<Form.Field>
						<label>Release Date</label>
						<DatePicker
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							name="releaseDate"
						/>
					</Form.Field>

					<Form.Button onClick={handleSubmit}>Add</Form.Button>
				</Form>
			</div>
		</Container>
	)
}

export default ComicCreate
