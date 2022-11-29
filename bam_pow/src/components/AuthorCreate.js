import React, { useState } from 'react'
import {Button, Checkbox, Form, Container, Icon} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import { authorCreate } from '../api/api_calls'

const AuthorCreate = ({user, msgAlert}) => {
	
	const navigate = useNavigate()
	const defaultAuthor ={
		first_name:'',
		last_name:'',
	}
	const [author, setAuthor] = useState(defaultAuthor)
	
	const handleChange = (e) => {
		setAuthor((prevAuthor) => {
			
			const updatedName = e.target.name
			let updatedValue = e.target.value
			
			console.log('this is the updatedName', updatedName)
			console.log('this is the updatedValue', updatedValue)


			const updatedAuthor = { [updatedName]: updatedValue }
			console.log('this is the updatedAuthor', updatedAuthor)
			return { ...prevAuthor, ...updatedAuthor}
			
		})
		console.log('this is author after set', author)
	}
	
		const handleCreateAuthor =  (e) => {
			e.preventDefault()
			console.log(author)
			authorCreate(author)
			
				.then(() => {
					msgAlert({
						heading: 'Success',
						message: 'Created Author',
						variant: 'success'
					})
				})
				.catch((error) => {
					msgAlert({
						heading: 'Failure',
						message: 'Create Author' + error,
						variant: 'danger'
					})
				})
		}
	return (
	<Container>
		<div className="comic-panel">
			<Form size="big">
				<h1 className="comic-panel-font">
					Add an Author
				</h1>
				<Form.Input
					required
					fluid
					label="First Name"
					placeholder="First Name"
					onChange={handleChange}
					name="first_name"
					value={author.first_name}
					
				/>
				<Form.Input
					required
					fluid
					label="Last Name"
					placeholder="Last Name"
					onChange={handleChange}
					name="last_name"
					value={author.last_name}
					
				/>
				<Form.Button onClick={handleCreateAuthor}>Add</Form.Button>
			</Form>
		</div>
	</Container>
)
    
}

export default AuthorCreate