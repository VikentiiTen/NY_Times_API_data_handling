const btn = document.getElementById('test-btn');
const categoriesBtn = document.getElementById('categories-btn');
const categoriesEl = document.getElementById('categories');
const articlesArea = document.getElementById('articles');



// Get categories
function getCategories() {
	fetch('https://api.nytimes.com/svc/archive/v1/2019/2.json?api-key=8793dBix9MPRBW5QM1noEAMn1cZRxQ8R')
		.then(res => res.json())
		.then(data => {
			categoriesEl.innerHTML = data.response.docs.map(x => x.section_name).filter((x, i, a) => a.indexOf(x) == i).map(x => `<p class="category">${x}</p>`).join('');
		})

}

// Get articles of a category
function getArticles(cat) {
	fetch('https://api.nytimes.com/svc/archive/v1/2019/2.json?api-key=8793dBix9MPRBW5QM1noEAMn1cZRxQ8R')
		.then(res => res.json())
		.then(data => {
			console.log(data.response.docs.filter(art => art.section_name === cat));
		})
}

// Event listeners
categoriesBtn.addEventListener('click', getCategories);
categoriesEl.addEventListener('click', (e) => {
	let catName = e.target.innerText;
	getArticles(catName);
})
