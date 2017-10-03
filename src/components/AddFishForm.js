import React from 'react';

class AddFishForm extends React.Component {
	render() {
		return (
			<form className='fish-edit' onSubmit={(e) => this.createFish(e)}>
				<input type="text" placeholder='Fish Name'/>
				<input type="text" placeholder='Fish Price'/>
				<select name="" id="">
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<input type="text" placeholder='Fish Status'/>
				<input type="text" placeholder='Fish Desc'/>
				<input type="text" placeholder='Fish Image'/>
				<button type='submit'>+ Add Item</button>
			</form>
		)
	}
}

export default AddFishForm;