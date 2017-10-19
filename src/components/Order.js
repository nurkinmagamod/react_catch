import React from 'react';

class Order extends React.Component {
	render() {
		const orderIds = Object.keys(this.props.order);
		const total = orderIds.reduce((prevTotal,key) => {
			const fish = this.props.fishes[key];
			const count = this.props.order[key];
			const isAvailble = fish && fish.status === 'available';
			if(isAvailble) {
				return prevTotal + (count * fish.price || 0)
			}
			return prevTotal;
		}, 0);
		return (
			<div className="order-warp">
				<h2>Order</h2>
				<p>{orderIds}</p>
				{total}
			</div>
		)
	}
}

export default Order;