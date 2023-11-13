const renderCard = () => {
	const cardImageWrapperEl = document.createElement('div');
	cardImageWrapperEl.className = 'card__image';

	const cardImageEl = document.createElement('img');
	cardImageEl.width = 302;
	cardImageEl.height = 302;
	cardImageEl.src = './images/equilibrium.jpg';
	cardImageEl.alt = '';

	cardImageWrapperEl.appendChild(cardImageEl);

	const cardContentEl = document.createElement('div');

	const cardTitleEl = document.createElement('h2');
	cardTitleEl.className = 'card__title';

	const cardTitleLinkEl = document.createElement('a');
	cardTitleLinkEl.href = '#';
	cardTitleLinkEl.className = 'btn btn--link';
	cardTitleLinkEl.textContent = 'Equilibrium #3429';

	cardTitleEl.appendChild(cardTitleLinkEl);

	const cardDescriptionEl = document.createElement('p');
	cardDescriptionEl.className = 'card__desc';
	cardDescriptionEl.textContent =
		'Our Equilibrium collection promotes balance and calm.';

	const cardStatusListEl = document.createElement('ul');
	cardStatusListEl.className = 'card__stats-list';

	const cardStatuses = [
		{ icon: 'icon-ethereum', value: '0.041 ETH' },
		{ icon: 'icon-clock', value: '3 days left' },
	];

	for (const status of cardStatuses) {
		const cardStatusItemEl = document.createElement('li');
		cardStatusItemEl.className = 'card__stats-list-item';
		const cardStatusItemIconEl = document.createElement('i');
		cardStatusItemIconEl.className = status.icon;
		cardStatusItemIconEl.ariaHidden = 'true';
		const cardStatusItemTextEl = document.createElement('span');
		cardStatusItemTextEl.textContent = status.value;

		cardStatusItemEl.appendChild(cardStatusItemIconEl);
		cardStatusItemEl.appendChild(cardStatusItemTextEl);
		cardStatusListEl.appendChild(cardStatusItemEl);
	}

	const cardAuthorEl = document.createElement('div');
	cardAuthorEl.className = 'card__author';

	const cardAuthorImageEl = document.createElement('img');
	cardAuthorImageEl.className = 'card__author-img';
	cardAuthorImageEl.width = 33;
	cardAuthorImageEl.height = 33;
	cardAuthorImageEl.src = './images/avatar.png';
	cardAuthorImageEl.alt = 'Jules Wyvern';

	const cardAuthorDescriptionEl = document.createElement('span');
	cardAuthorDescriptionEl.className = 'card__author-desc';
	cardAuthorDescriptionEl.textContent = 'Creation of ';

	const cardAuthorDescriptionLinkEl = document.createElement('a');
	cardAuthorDescriptionLinkEl.href = '#';
	cardAuthorDescriptionLinkEl.className = 'btn btn--link';
	cardAuthorDescriptionLinkEl.textContent = 'Jules Wyvern';

	cardAuthorDescriptionEl.appendChild(cardAuthorDescriptionLinkEl);
	cardAuthorEl.appendChild(cardAuthorImageEl);
	cardAuthorEl.appendChild(cardAuthorDescriptionEl);

	cardContentEl.appendChild(cardTitleEl);
	cardContentEl.appendChild(cardDescriptionEl);
	cardContentEl.appendChild(cardStatusListEl);
	cardContentEl.appendChild(cardAuthorEl);

	const card = document.querySelector('.card');
	card.appendChild(cardImageWrapperEl);
	card.appendChild(cardContentEl);
};

renderCard();
