/**
 * @param {string} targetPage
 */
const createNavigation = (navData, targetPage) => {
	const navElement = document.createElement('nav');

	const ulElement = document.createElement('ul');

	navData.forEach((item) => {
		const liElement = document.createElement('li');
		const aElement = document.createElement('a');
		aElement.href = item.url;
		aElement.textContent = item.label;
		if (item.url.startsWith("http")) {
			aElement.target = "_blank";
		}

		if (item.url === targetPage) {
			aElement.classList.add('this-page');
		}

		liElement.appendChild(aElement);
		ulElement.appendChild(liElement);
	});

	navElement.appendChild(ulElement);

	const contactInfo = document.createElement('div');
	contactInfo.innerHTML = `<ul id="contact-info"><li><a href="mailto:dm@joshmleslie.com"target="_blank"rel="noreferrer"aria-label="email">Hello@JoshMLeslie.com</a></li><li><a href="tel:+12037671098"target="_blank"rel="noreferrer"aria-label="phone">+1-203-767-1098</a></li></ul>`;
	navElement.appendChild(contactInfo);

	return navElement;
};

/**
 * @param {string} targetPage
 */
window.makeNav = async (targetPage = '/') => {
	const navData = await fetch('assets/json/nav.json').then((r) => r.json());
	document.body.prepend(createNavigation(navData, targetPage));
};
