import React, { useState, useEffect } from "react"
import { Form, Container, Message } from "semantic-ui-react"
import { useNavigate } from "react-router-dom"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const ComicCreate = (props) => {
	const { msgAlert } = props

	const [comic, setComic] = useState({
		title: null,
		authors: null,
		illustrators: null,
		publisher: null,
		characters: null,
		releaseDate: null,
		cover: null,
	})

	const navigate = useNavigate()

	const [startDate, setStartDate] = useState(new Date())

	const handleChange = (e) => {
		// console.log(e.target.value)
		setComic((prevComic) => {
			const name = e.target.name
			let value = e.target.value
			if (name === "illustrators" && value.includes(",")) {
				let str = value
				value = str.split(", ")
			}
			if (name === "authors" && value.includes(",")) {
				let str = value
				value = str.split(", ")
			}
			if (name === "characters" && value.includes(",")) {
				let str = value
				value = str.split(", ")
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
		// e.preventDefault()

		setComic((comic.releaseDate = startDate))

		console.log(comic)

		setComic((comic.releaseDate = startDate))
		console.log("the comic?", comic)
		// navigate('/mypage')
	}

	return (
		<Container>
			<div className="comic-panel">
				<Form size="big">
					<h1 className="comic-panel-font">
						Add a comic to your collection!
					</h1>
					<Form.Input
						required
						fluid
						label="Comic Title"
						placeholder="Title"
						onChange={handleChange}
						name="title"
						value={comic.title}
					/>
					<Form.Input
						required
						fluid
						label="Author(s)"
						placeholder="For multiple add commas e.g. (Hickman, Zdarsky)"
						onChange={handleChange}
						name="authors"
					/>
					<Form.Input
						required
						fluid
						label="Illustrator(s)"
						placeholder="For multiple add commas e.g. (Mignola, Quinones)"
						onChange={handleChange}
						name="illustrators"
					/>
					<Form.Input
						required
						fluid
						label="Publisher"
						placeholder="Publisher"
						onChange={handleChange}
						name="publisher"
					/>
					<Form.Input
						required
						fluid
						label="Character(s)"
						placeholder="For multiple add commas e.g. (Batman, Poison Ivy)"
						onChange={handleChange}
						name="characters"
					/>
					<Form.Input
						required
						fluid
						label="Cover"
						placeholder="Paste a link to the cover"
						onChange={handleChange}
						name="cover"
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
