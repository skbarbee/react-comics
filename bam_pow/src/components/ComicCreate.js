import React, { useState, useEffect } from "react"
import { Form, Container, Message, Modal, Dropdown } from "semantic-ui-react"
import { useNavigate } from "react-router-dom"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Button } from "react-bootstrap"
import {
	getAuthors,
	getCharacters,
	getIllustrators,
	getPublishers,
	getAllComics,
} from "../api/api_calls"

const ComicCreate = (props) => {
	const { msgAlert } = props
	const [publishers, setPublishers] = useState()
	const [authors, setAuthors] = useState()
	const [illustrators, setIllustrators] = useState()
	const [characters, setCharacters] = useState()
	const [loaded, setLoaded] = useState(null)

	const [comic, setComic] = useState({
		title: null,
		authors: null,
		illustrators: null,
		publisher: null,
		characters: null,
		releaseDate: null,
		cover: null,
	})

			.catch(console.error)
		getPublishers()
			.then((res) => {
				let publishers = res.data.publishers
				console.log(publishers)
				const publisherOptions = publishers.map(
					(publishers, index) => ({
						key: index,
						value: publishers.publisher_name,
						text: publishers.publisher_name,
					})
				)
				setPublishers(publisherOptions)
			})
			.catch(console.error)
		setLoaded(true)
	}, [])
	const [comic, setComic] = useState(
		{
			title: null,
			authors: null,
			illustrators: null,
			publisher: null,
			characters: null,
			releaseDate: null,
			cover: null,
		},
		[]
	)
		console.log(illustrators)
	if (loaded) {
		// console.log("out of useeffect", characters)
	}
	// useEffect(() => {
	// 	const pub_options = publishers.map((publisher) => {
	// console.log(publisher.publisher_name)
	// 	})
	// }, [publishers])
	const navigate = useNavigate()

	const [startDate, setStartDate] = useState(new Date())

	const handleChange = (e) => {
		console.log("target?", e.target)

		setComic((prevComic) => {
			const name = e.target.getAttribute("name")
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
		console.log(comic)
	}

	const handleSubmit = (e) => {
		// e.preventDefault()

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
					<Form.Select
						required
						fluid
						multiple
						search
						selection
						placeholder="Authors"
						name="authors"
						options={authors}
						label="Author(s)"
						onChange={handleChange}
					/>
					
					{/* <Button>Click for modal</Button> */}
					<Form.Select
						required
						fluid
						multiple
						search
						selection
						placeholder="Illustrators"
						name="illustrators"
					/>
					<Form.Input
						required
						fluid
						label="Publisher"
						placeholder="Publisher"
						onChange={handleChange}
					/>
					<Form.Select
						required
						fluid
						search
						selection
						placeholder="Publishers"
						name="publisher"
						options={publishers}
						label="Publisher"
						onChange={handleChange}
					/>
					<Form.Select
						required
						fluid
						search
						selection
						multiple
						placeholder="Characters"
						name="characters"
						options={characters}
						label="Publisher"
						onChange={handleChange}
					/>
					<Form.Input
						required
						fluid
						label="Cover"
						placeholder="Paste a link to the cover"
						onChange={handleChange}
						name="cover"
					/>
					<Form.Input
						required
						fluid
						label="Cover"
						placeholder="Paste a link to the cover"
						onChange={handleChange}
						name="cover"
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
		</>
	)
}

export default ComicCreate
