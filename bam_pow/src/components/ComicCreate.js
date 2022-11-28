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

	useEffect(() => {
		getAuthors()
			.then((res) => {
				let authors = res.data.authors
				const authorOptions = authors.map((authors, index) => ({
					key: index,
					value: authors.first_name + " " + authors.last_name[index],
					text: authors.first_name + " " + authors.last_name,
				}))
				setAuthors(authorOptions)
			})
			.catch(console.error)
		getIllustrators()
			.then((res) => {
				let illustrators = res.data.illustrators
				console.log("the res", illustrators)
				const illustratorOptions = illustrators.map(
					(illustrators, index) => ({
						key: index,
						value:
							illustrators.first_name +
							" " +
							illustrators.last_name[index],
						text:
							illustrators.first_name +
							" " +
							illustrators.last_name,
					})
				)
				setIllustrators(illustratorOptions)
				console.log(illustrators)
			})
			.catch(console.error)
		getCharacters()
			.then((res) => {
				let characters = res.data.characters
				const characterOptions = characters.map(
					(characters, index) => ({
						key: index,
						value: characters.real_name,
						text: characters.real_name,
					})
				)
				setCharacters(characterOptions)
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
						options={illustrators}
						label="Illustrator(s)"
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
