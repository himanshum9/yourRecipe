import Search from './models/Search';
import {elements} from './views/base';
import * as searchView from './views/searchView';

/** Global State of the app
*Search Object
*Current Recipe Object
*Shopping list Object
*Liked Recipe
*/
const state = {};
const controlSearch = async() => {
	const query = searchView.getInput();
	if (query) {
	state.search = new Search(query);
	searchView.clearInput();
	state.search.recipe = await state.search.getResults();
	// console.log(state.search.recipe);
	searchView.renderResults(state.search.recipe);
	}
}
elements.searchForm.addEventListener('submit', e=>{
	e.preventDefault();
	controlSearch();
	alert('hey');
	
});
const search = new Search('pizza');
const recipe = search.getResults();
console.log(recipe);
console.log(search);