const portfolioContainer = document.querySelector('.portfolio-container');

const titleFactory = ({text}, itemContainer) => {
	const title = document.createElement('h2');
	title.textContent = text;
	title.className = 'portfolio-title';
	itemContainer.appendChild(title);
};

const portfolioItemFactory = (
	{link, text, imageUrl, imageAlt, imgByHeight},
	itemContainer
) => {
	const portfolioItem = document.createElement('a');
	portfolioItem.href = link;
	portfolioItem.target = '_blank';
	portfolioItem.className = 'portfolio-item';

	if (text) {
		const titleSpan = document.createElement('span');
		titleSpan.textContent = text;
		portfolioItem.appendChild(titleSpan);
	}

	const image = document.createElement('img');
	image.src = imageUrl;
	image.alt = imageAlt;
	if (imgByHeight) {
		image.className = 'image-by-height';
	}

	portfolioItem.appendChild(image);

	itemContainer.appendChild(portfolioItem);
};

function createItemContainer(item) {
	const itemContainer = document.createElement('div');
	itemContainer.id = item.text.replace(/\s/g, '-').toLowerCase();
	itemContainer.classList.add('portfolio-item-container');
	portfolioContainer.appendChild(itemContainer);
	return itemContainer;
}

(function renderPortfolioItems() {
	let itemContainer;
	fetch('assets/json/portfolio-data.json')
		.then((res) => res.json())
		.then((data) => {
			data.forEach((item) => {
				if (item.isTitle) {
					titleFactory(item, portfolioContainer);
					itemContainer = createItemContainer(item);
				} else {
					portfolioItemFactory(item, itemContainer);
				}
			});
		})
		.catch((error) => {
			console.error('Error fetching portfolio data:', error);
		});
})();
