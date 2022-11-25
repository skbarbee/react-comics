import React, { useState, useEffect } from "react"
import { Form, Container } from "semantic-ui-react"
import { useNavigate } from "react-router-dom"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const ComicCreate = () => {
	const [comic, setComic] = useState({
		title: null,
		author: null,
		illustrator: null,
		publisher: null,
		releaseDate: null,
	})

	const [startDate, setStartDate] = useState(new Date())

	const handleChange = (e) => {
		console.log(e.target.value)
		setComic((prevComic) => {
			const name = e.target.name
			let value = e.target.value

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
        setComic(comic.releaseDate= startDate)
        console.log(comic)
		console.log("hi")
	}

	return (
		<Container>
			<div className="comic-panel">
			<Form >
                <h1 className="comic-panel-font">Add a comic to your collection!</h1>
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
					placeholder="Author"
					onChange={handleChange}
					name="author"
				/>
				<Form.Input
					required
					fluid
					label="Illustrator"
					placeholder="Illustrator"
					onChange={handleChange}
					name="illustrator"
				/>
				<Form.Input
					fluid
					label="Publisher"
					placeholder="Publisher"
					onChange={handleChange}
					name="publisher"
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
