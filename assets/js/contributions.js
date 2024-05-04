// https://colordesigner.io/gradient-generator
const GRADIENTS = [
	'#58b913',
	'#3eb52c',
	'#18b03c',
	'#00ac4a',
	'#00a655',
	'#00a15f',
	'#009b68',
	'#00956f',
	'#008f75',
	'#00897a',
	'#00837c',
	'#007c7e',
	'#00767e',
	'#006f7c',
	'#006979',
	'#006275',
	'#005b6f',
	'#0d5568',
	'#204e61',
	'#2a4858',
];

const gitReadData = fetch('assets/json/gh-read.json').then((r) => r.json());

function addMonthHeader(currentDatePointer, tbody) {
	const monthHeader = document.createElement('tr');
	const monthCell = document.createElement('td');
	monthCell.colSpan = 7;
	monthCell.classList.add('month-header');
	monthCell.textContent = currentDatePointer.toLocaleString('default', {
		month: 'long',
		year: 'numeric',
	});
	monthHeader.appendChild(monthCell);
	tbody.appendChild(monthHeader);
}

function formatDate(date) {
	return date.toISOString().split('T')[0];
}

export const generateCalendar = (contributionData, contribMain) => {
	const currentDate = new Date();
	currentDate.setUTCHours(0, 0, 0, 0);
	const oldestDate = new Date(
		Math.min(
			...Object.keys(contributionData).map((date) => new Date(date).getTime())
		)
	);

	const tbody = document.querySelector(contribMain + ' #calendar-body');
	let currentDatePointer = new Date(currentDate);

	// init first month
	addMonthHeader(currentDatePointer, tbody);

	let monthGradient = 0;
	let week = 1;
	while (currentDatePointer >= oldestDate) {
		const row = document.createElement('tr');
		let formattedDate = formatDate(currentDatePointer);

		for (let day = 0; day < 7; day++) {
			const cell = document.createElement('td');

			// pull contrib count from data
			formattedDate = formatDate(currentDatePointer);
			const contributionCount = contributionData[formattedDate] || 0;
			cell.textContent = contributionCount;

			cell.title = formattedDate;
			if (contributionCount < GRADIENTS.length) {
				cell.style.backgroundColor = GRADIENTS[contributionCount];
			} else {
				cell.style.color = 'white';
				cell.style.backgroundColor = GRADIENTS[GRADIENTS.length - 1];
			}

			// set cell date attr for ref
			cell.setAttribute('data-date', formattedDate);
			row.appendChild(cell);

			currentDatePointer.setDate(currentDatePointer.getDate() - 1);

			if (formattedDate.slice(-2) === '01') {
				break;
			}
		}

		tbody.appendChild(row);

		// IF there's more than a day between the current next-week start and oldest date,
		// add a new month header.
		// ELSE it's not the final month in the dataset,
		// don't add a title.
		const newMonth =
			formattedDate.slice(-2) === '01' && currentDatePointer >= oldestDate;
		if (newMonth) {
			addMonthHeader(currentDatePointer, tbody);
			monthGradient++;
		}
	}
};

export const fetchGitlabPaginated = async (page, acc = {}) => {
	return fetch(
		'https://gitlab.com/api/v4/users/2360060/events?per_page=100&action=pushed&page=' +
			page,
		{
			headers: {
				'PRIVATE-TOKEN': gitReadData.read_gl_user,
			},
		}
	)
		.then(async ({body}) => {
			const reader = body.getReader();

			// from MDN
			return new ReadableStream({
				start(controller) {
					function push() {
						reader.read().then(({done, value}) => {
							if (done) {
								console.log('done', done);
								controller.close();
								return;
							}
							controller.enqueue(value);
							push();
						});
					}

					push();
				},
			});
		})
		.then((stream) =>
			// Respond with our stream
			new Response(stream, {
				headers: {'Content-Type': 'text/html'},
			}).text()
		)
		.then((result) => {
			const contributions = JSON.parse(result).reduce((acc, val) => {
				const key = val.created_at.split('T')[0];
				const count = val.push_data.commit_count;
				if (acc[key]) {
					acc[key] += count;
				} else {
					acc[key] = count;
				}
				return acc;
			}, {});

			acc = {...acc, ...contributions};
			return acc;
		});
};

export const fetchGithub = async () => {
	const headers = {
		Authorization: `bearer ${gitReadData.read_gh_user}`,
	};
	const body = {
		query: `query {
						user(login: "JoshMLeslie") {
							contributionsCollection {
								contributionCalendar {
									weeks {
										contributionDays {
											contributionCount
											date
										}
									}
								}
							}
						}
					}`,
	};
	const res = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		body: JSON.stringify(body),
		headers,
	}).then((r) => r.json());

	let contributionCalendar;
	try {
		({
			data: {
				user: {
					contributionsCollection: {contributionCalendar},
				},
			},
		} = res);
	} catch (e) {
		console.warn('Error retrieving github contrib', e);
	}

	return contributionCalendar;
};
