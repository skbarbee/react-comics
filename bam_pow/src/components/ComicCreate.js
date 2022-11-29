import React, { useState, useEffect } from "react"
import { Form, Container, Message, Modal, Dropdown } from "semantic-ui-react"
import { useNavigate } from "react-router-dom"
import DatePicker from "react-datepicker"
import Select from "react-select"
import "react-datepicker/dist/react-datepicker.css"
import { Button } from "react-bootstrap"
import {
	getAuthors,
	getCharacters,
	getIllustrators,
	getPublishers,
	postComic,
} from "../api/api_calls"

const ComicCreate = (props) => {
	const { msgAlert } = props
	const [publishers, setPublishers] = useState()
	const [authors, setAuthors] = useState()
	const [illustrators, setIllustrators] = useState()
	const [characters, setCharacters] = useState()
	const [loaded, setLoaded] = useState(null)
	const [startDate, setStartDate] = useState(new Date())

	useEffect(() => {
		getAuthors()
			.then((res) => {
				let authors = res.data.authors

				const authorOptions = authors.map((author, index) => ({
					key: author.id,
					value: author.id,
					label: author.first_name + " " + author.last_name,
				}))
				setAuthors(authorOptions)
			})
			.catch(console.error)
		getIllustrators()
			.then((res) => {
				let illustrators = res.data.illustrators
				console.log("the res", illustrators)
				const illustratorOptions = illustrators.map(
					(illustrator, index) => ({
						key: illustrator.id,
						value: illustrator.id,
						label:
							illustrator.first_name +
							" " +
							illustrator.last_name,
					})
				)
				setIllustrators(illustratorOptions)
			})
			.catch(console.error)
		getCharacters()
			.then((res) => {
				let characters = res.data.characters
				const characterOptions = characters.map((character, index) => ({
					key: character.id,
					value: character.id,
					label: character.real_name,
				}))
				setCharacters(characterOptions)
			})

			.catch(console.error)
		getPublishers()
			.then((res) => {
				let publishers = res.data.publishers
				const publisherOptions = publishers.map((publisher, index) => ({
					key: publisher.id,
					value: publisher.id,
					label: publisher.publisher_name,
				}))
				setPublishers(publisherOptions)
			})
			.catch(console.error)
		setLoaded(true)
	}, [])
	const [comic, setComic] = useState(
		{
			title: null,
			authors: [],
			illustrators: [],
			publisher: null,
			characters: [],
			edition: null,
			release_date: null,
			cover: null,
		},
		[]
	)


	const navigate = useNavigate()



	const handleChange = (e) => {
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
		setComic((prevComic) => {

			const name = 'release_date'
			let value = startDate
			const updatedComic = {
				[name]: value,
			}
			return {
				...prevComic,
				...updatedComic
			}
		})
		console.log(comic)
	}

	const handleSubmit = (e) => {
		// e.preventDefault()

		setComic((comic.release_date = startDate))
		let sentComic = JSON.stringify(comic)
		console.log(sentComic)
		postComic(sentComic)
		
		console.log("the comic?", comic)
	}

	const handleIllustratorSelect = (e) => {
		let illustrators = []
		console.log(e)
		e.forEach((e) => illustrators.push(e.value))
		setComic((prevComic) => {
			const name = "illustrators"
			let value = illustrators
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
	const handleCharacterSelect = (e) => {
		let characters = []
		console.log("the selection", e)

		e.forEach((e) => characters.push(e.value))
		console.log("chars", characters)
		setComic((prevComic) => {
			const name = "characters"
			let value = characters
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

	const handleAuthorSelect = (e) => {
		let authors = []
		e.forEach((e) => authors.push(e.value))
		setComic((prevComic) => {
			const name = "authors"
			let value = authors
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
	const handlePublisherSelect = (e) => {
		let publisher = e.value
		setComic((prevComic) => {
			const name = "publisher"
			let value = publisher
			const updatedComic = {
				[name]: value,
			}
			return {
				...prevComic,
				...updatedComic,
			}
		})
	}

	return (
		<Container>
			<div className="comic-panel">
				<Form size="medium">
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
					<Form.Field>
						<label>Edition</label>
						<input 
						type ="number"
						name= "edition"
						onChange={handleChange}
						/>
					</Form.Field>
					<Form.Field>
						<label>Authors</label>
						<Select
							required
							options={authors}
							name="authors"
							isMulti
							onChange={handleAuthorSelect}
						/>
					</Form.Field>
					<Form.Field>
						<label>Illustrators</label>
						<Select
							required
							options={illustrators}
							name="illustrators"
							isMulti
							onChange={handleIllustratorSelect}
						/>
					</Form.Field>

					<Form.Field>
						<label>Publisher</label>
						<Select
							required
							options={publishers}
							name="publisher"
							onChange={handlePublisherSelect}
						/>
					</Form.Field>

					<Form.Field>
						<label>Characters</label>
						<Select
							required
							options={characters}
							name="characters"
							isMulti
							onChange={handleCharacterSelect}
						/>
					</Form.Field>
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
