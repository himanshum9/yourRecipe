import axios from 'axios';
export default class Search {
	constructor(query) {
		this.query = query;
	}

	async getResults() {
		// const proxy ='';
		// const key = '';
		try {
			const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);

			this.result = res.data.recipes;
			return this.result;
			//console.log(this.result);
		} catch(error){
			alert(error);
		}
	}
}