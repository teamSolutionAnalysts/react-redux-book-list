import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/action_select_book';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderBookList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item" onClick={() => { this.props.selectBook(book) }}>{book.title}</li>
			)
		})
	}

	render() {
		return (
			<ul className="list-group col-sm-4 ">
				{this.renderBookList()}
			</ul>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		books: state.books
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);