const jobData = [
	{
		header: {
			company: 'muNode',
			description: 'Innovation Studio',
			role: 'Co-Founder',
			start: '2020.06',
			end: 'Now',
		},
		url: 'https://www.munode.dev',
		about: [
			'Startup focused on bringing in-house, novel, out-of-the-box innovations from concept to prototype',
			'Passionate about decentralizing server farms, empowering individuals with personal data ownership, and updating overlooked industrial sectors that still rely on decades-old systems',
		],
		skills: 'Angular, TypeScript, Material UI, GoLang, Docker, Heroku, Figma',
		type: 'F',
	},
	{
		header: {
			company: 'Fashionphile',
			description: 'Recommerce Platform',
			role: 'Frontend Engineer',
			start: '2022.01',
			end: '2023.06',
		},
		url: 'https://www.fashionphile.com',
		about: [
			'Managed complex tickets across teams to develop and enhance the user portal for selling items, obtaining quotes, and streamlining reimbursement workflows as well as analytics gathering',
			'Utilized Next.JS to build responsive and intuitive user interfaces, ensuring seamless user experiences',
		],
		skills:
			'React, Redux, Bootstrap, Saga, Storybook, Jasmine, Jest, AWS, JIRA',
		type: 'F',
	},
	{
		header: {
			company: 'Dynepic, Inc.',
			description: 'Learning Management System',
			role: 'Fullstack Engineer',
			start: '2020.11',
			end: '2021.11',
		},
		url: 'https://www.dynepic.com',
		about: [
			'Lead engineer on scheduling app within the larger ecosystem that provided end users the ability to schedule demo classes for use at job fairs, conventions, etc',
			'Leveraged Docker and Rancher for containerization and orchestration, ensuring efficient deployment and scalability of the scheduling app.',
		],
		skills:
			'Angular, TypeScript, Material UI, Bootstrap, Storybook, GCloud, JIRA',
		type: 'F',
	},
	{
		header: {
			company: 'OSMS',
			description: 'Collaborative Supply Platform',
			role: 'Fullstack Engineer + UI Designer',
			start: '2020.03',
			end: '2021.03',
		},
		url: 'https://www.opensourcemedicalsupplies.org',
		about: [
			'Lead website engineer and sole UI designer, leading the development of the OSMS website',
			'Worked together with diverse teams, including engineers, medical professionals, scientists, researchers, makers, fabricators, designers, activists, international professionals, and translators to understand their requirements and translate them into effective website features and user interfaces',
			'Juggled 5 different time zones with a professional team and dedicated volunteers to ensure the website provided high-quality information, guidance, and support to communities worldwide',
		],
		skills: 'React, MUI, AirTable, GCloud, WordPress, Figma',
		type: 'C',
	},

	{
		header: {
			company: 'Global Pandemic',
			description: 'COVID-19',
			role: 'Survivor',
			start: '2020.01',
			end: '???',
		},
		url: 'https://www.cdc.gov/coronavirus/2019-ncov',
		about: [
			'Successfully adhered to public health guidelines, staying informed about the virus and vaccination efforts.',
			'Demonstrated adaptability, collaboration, and a commitment to preserving health and safety amidst the challenges of the pandemic.',
		],
		skills: 'Adaptability, resilience, self-care',
		type: 'V',
	},
	{
		header: {
			company: 'Federal Reserve of NY',
			description: 'Financial Institution',
			role: 'UI Designer / Frontend Engineer',
			start: '2020.01',
			end: '2020.11',
		},
		url: 'https://www.newyorkfed.org',
		about: [
			'Pivotal role as the Lead UI Designer in the rebuild project of multiple internal websites within the Federal Reserve of New York, most over 7 years old.',
			'Collaborated closely with stakeholders within the Federal Reserve, including project managers, business analysts, and subject matter experts, to gather requirements and understand the specific needs of the internal users.',
			'Translated requirements and user insights into wireframes, prototypes, and visually appealing UI designs, aligning them with the organizations branding guidelines',
		],
		skills:
			'Angular, TypeScript, Bootstrap, Material UI, jQuery, InVision, JIRA',
		type: 'C',
	},
	{
		header: {
			company: 'ADP',
			description: 'Payroll Platform',
			role: 'Frontend Engineer',
			start: '2019.06',
			end: '2020.01',
		},
		url: 'https://www.adp.com',
		about: [
			'Key member of the Time Team at ADP, focusing on managing various aspects related to employee time, including payroll and time clock systems.',
			'Maintained and enhanced the time clock system, ensuring its reliability, accuracy, and compliance with applicable regulations.',
		],
		skills:
			'Angular, TypeScript, Bootstrap, jQuery, Jasmine, Jest, ShallowRender, JIRA',
		type: 'C',
	},
	{
		header: {
			company: 'Digital Minion',
			description: 'Cybersecurity',
			role: 'Junior Engineer',
			start: '2018.06',
			end: '2019.06',
		},
		url: 'https://www.digitalminion.com',
		about: [
			'Participated in the development and maintenance of the company s software products, adhering to best practices and coding standards to ensure high-quality and efficient code',
			'Contributed to the development and refinement of internal programs, documentation, and policies related to security, governance, risk, and compliance to enhance the overall data management practices',
			'Gained exposure to both on-premise and cloud environments, assisting in implementing best practices for responsible data development, including data security, privacy, and compliance measures',
		],
		skills: 'Angular, TypeScript, AngularJS, Figma',
		type: 'F',
	},
	{
		header: {
			company: 'Punks with Lunch',
			description: 'Non-profit Outreach',
			role: 'Volunteer',
			start: '2021.05',
			end: '2023.09',
		},
		url: 'https://www.punkswithlunch.org/',
		about: [
			'Helping distribute resources to people experiencing homelessness and food insecurity in the community, including food, basic first aid resources, and clean tools for safer drug use.',
		],
		skills: 'Community Enagement, Resource Management',
		type: 'V',
	},
	{
		header: {
			company: 'Ace Makerspace',
			description: 'Non-profit Makerspace',
			role: 'Steward',
			start: '2021.03',
			end: '2023.06',
		},
		url: 'https://acemakerspace.org/',
		about: [
			'Supported the 150+ member community by facilitating access to tools, resources, and education to foster a safe, inclusive, and equitable environment for makers of all backgrounds and skill levels.',
		],
		skills:
			'Member Management, Team Management, Woodworking, Metalworking, CAD/CAM',
		type: 'V',
	},
];

const generateJobDataHTML = (data) => {
	const parentDiv = document.getElementById('job-history');

	data.forEach((child) => {
		const childDiv = document.createElement('div');
		childDiv.classList.add('job-data-child');

		const headerDiv = document.createElement('div');
		headerDiv.classList.add('job-data-child-header');

		const headerInfoDiv = document.createElement('div');
		const companySpan = document.createElement('span');
		companySpan.textContent = child.header.company;
		headerInfoDiv.appendChild(companySpan);

		const descriptionSpan = document.createElement('span');
		descriptionSpan.textContent = child.header.description;
		headerInfoDiv.appendChild(descriptionSpan);

		const roleSpan = document.createElement('span');
		roleSpan.textContent = child.header.role;
		headerInfoDiv.appendChild(roleSpan);

		headerDiv.appendChild(headerInfoDiv);

		const dateDiv = document.createElement('div');
		const startSpan = document.createElement('span');
		startSpan.textContent = child.header.start;
		dateDiv.appendChild(startSpan);

		const endSpan = document.createElement('span');
		endSpan.textContent = child.header.end;
		dateDiv.appendChild(endSpan);

		headerDiv.appendChild(dateDiv);
		childDiv.appendChild(headerDiv);

		const link = document.createElement('a');
		link.target = '_blank norel nofollow';
		link.href = child.url;
		link.textContent = child.url;
		childDiv.appendChild(link);

		const aboutList = document.createElement('ul');
		child.about.forEach((text) => {
			const listItem = document.createElement('li');
			const firstWord = document.createElement('span');
			const bodyText = document.createElement('span');
			[, firstWord.textContent, bodyText.textContent] =
				text.match(/(\w+)\s(.*)/); // this feels illegal

			firstWord.style.fontWeight = 700;
			firstWord.style.marginRight = '4px';

			listItem.appendChild(firstWord);
			listItem.appendChild(bodyText);

			aboutList.appendChild(listItem);
		});
		childDiv.appendChild(aboutList);

		if (child.skills) {
			const techParagraph = document.createElement('div');
			techParagraph.className = 'job-data-child-tech-used';

			const techStartSpan = document.createElement('span');
			techStartSpan.textContent = 'Skills';
			techStartSpan.style.fontWeight = 700;
			techStartSpan.style.marginRight = '4px';

			const techDescription = document.createElement('span');
			techDescription.textContent = child.skills;
			techParagraph.appendChild(techStartSpan);
			techParagraph.appendChild(techDescription);
			childDiv.appendChild(techParagraph);
		}

		parentDiv.appendChild(childDiv);
	});
};

generateJobDataHTML(jobData);

/** @type {HTMLElement} */
let lastEl = null;

const filterBy = (name) => {
	document.getElementById('job-history').innerHTML = '';
	if (name === 'reset') {
		generateJobDataHTML(jobData);
	} else {
		generateJobDataHTML(
			jobData.filter((d) => d.skills.toLowerCase().includes(name))
		);
	}
};

document.querySelectorAll('button[data-filterby]').forEach((el) => {
	el.addEventListener('click', () =>{
		lastEl?.classList.remove('disabled');
		el.classList.add('disabled');
		filterBy(el.getAttribute('data-filterby'))
		lastEl = el;
	});
});
