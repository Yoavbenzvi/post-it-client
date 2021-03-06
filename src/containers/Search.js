import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import baseURL from "../api";
import { toggleModalOn } from "../actions";
import SearchResults from "../components/SearchResults/SearchResults";
import Modal from "../components/Modal/Modal";

class Search extends React.Component {
	state = {
		results: [],
	};

	renderInputField = ({ input }) => {
		return (
			<div>
				<div className="rounded-md shadow-md bg-blue-300 p-4 flex flex-col container mx-auto">
					<div className="flex justify-center ">
						<div className="">
							<input
								{...input}
								className="shadow-md focus:border-blue-300 border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
								type="text"
								placeholder="Search"
								autocomplete="off"
							/>
						</div>
						<button
							type="submit"
							className="hover:bg-smoke-smoke-lightest rounded-full "
						>
							<svg
								className="text-gray-600 h-6 w-6 m-2 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path
									className="heroicon-ui"
									d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		);
	};

	onSearchSubmit = ({ searchTerm }) => {
		baseURL
			.get(`search-user/${searchTerm}`)
			.then((response) => {
				response.data.length > 0
					? this.setState({ results: response.data })
					: this.setState({ results: null });
				this.props.reset();
			})
			.catch(toggleModalOn());
	};

	renderSearchResults = () => {
		return !this.state.results ? (
			<div
				class="mt-8 bg-blue-100 border-4 rounded-md border-blue-500 text-blue-700 px-4 py-3"
				role="alert"
			>
				<p class="font-bold">Sorry, no results</p>
				<p class="text-sm">Try a different search term</p>
			</div>
		) : (
			<SearchResults results={this.state.results} />
		);
	};

	render() {
		return (
			<React.Fragment>
				{this.props.modal ? <Modal /> : null}
				<div className="w-full flex justify-center p-2">
					<div className="w-full flex flex-col">
						<div>
							<form
								onSubmit={this.props.handleSubmit(this.onSearchSubmit)}
							>
								<Field
									name="searchTerm"
									component={this.renderInputField}
								/>
							</form>
						</div>
						<div className="flex justify-center">
							{this.renderSearchResults()}
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	modal: state.modalReducer.modal,
});

const mapDispatchToProps = {
	reset,
	toggleModalOn,
};

const WrappedSearch = reduxForm({
	form: "searchUsers",
})(Search);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedSearch);
