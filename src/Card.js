import React from 'react'; 

class Card extends React.Component {
	render() {
		return (
			<>
			<div class="card">
    			<h1 class="card-title">BINGO</h1>
    			<div class="card-numbers">
				<table>
					<tr>
						<th>_</th>
						<th>_</th>
						<th>_</th>
						<th>_</th>
						<th>_</th>
					</tr>
					<tr>
						<th>_</th>
						<th>_</th>
						<th>_</th>
						<th>_</th>
						<th>_</th>
					</tr>
					<tr>
						<th>_</th>
						<th>_</th>
						<th>_</th>
						<th>_</th>
						<th>_</th>
					</tr>
					<tr>
						<th>_</th>
						<th>_</th>
						<th>_</th>
						<th>_</th>
						<th>_</th>
					</tr>
					<tr>
						<th>_</th>
						<th>_</th>
						<th>_</th>
						<th>_</th>
						<th>_</th>
					</tr>
				</table>
    			</div>
  			</div>
			</>
		)
	}
}

export default Card;