import React from 'react';
import { formatPrice } from '../helpers';
 

class Fish extends React.Component {
	render() {
		const { details, index } = this.props;
		const isAvailable = details.status === 'available';
		const button = isAvailable ? 'Add To Order':'Sold Out';
		return(
			<li className="menu-fish">
				<img src={details.image} alt=""/>
				<h3 className="fish-name">
					{details.name}
					<span className="price">{formatPrice(details.price)}</span>
				</h3>
				<p>{details.desc}</p>
				<button disabled={!isAvailable} onClick={() => this.props.addToOrder(index)}>{button}</button>
			</li>
		)
	}
}

export default Fish; 