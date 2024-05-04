const portfolioContainer = document.querySelector('.portfolio-container');

const titleFactory = ({text}) => {
	const title = document.createElement('h2');
	title.textContent = text;
	title.className = 'portfolio-title';
	portfolioContainer.appendChild(title);
};

const portfolioItemFactory = ({link, text, imageUrl, imageAlt, imgByHeight}) => {
	const portfolioItem = document.createElement('a');
	portfolioItem.href = link;
	portfolioItem.target = '_blank';
	portfolioItem.className = 'portfolio-item';

	const titleSpan = document.createElement('span');
	titleSpan.textContent = text;

	const image = document.createElement('img');
	image.src = imageUrl;
	image.alt = imageAlt;
	if (imgByHeight) {
		image.className = 'image-by-height';
	}

	portfolioItem.appendChild(titleSpan);
	portfolioItem.appendChild(image);

	portfolioContainer.appendChild(portfolioItem);
};

(function renderPortfolioItems() {
	fetch('assets/json/portfolio-data.json')
		.then((res) => res.json())
		.then((data) => {
			data.forEach((item) => {
				item.isTitle ? titleFactory(item) : portfolioItemFactory(item);
			});
		})
		.catch((error) => {
			console.error('Error fetching portfolio data:', error);
		});
})();
