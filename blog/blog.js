const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
]

const contents = document.getElementById('content');
//const contents2 = document.getElementById('content2');
if (contents) {
    articles.forEach(item => {
        // Create the main article container which will use the grid layout
        const articleContainer = document.createElement('article');
        articleContainer.classList.add('main-view'); // Use existing CSS grid classes

        // --- Left Column (Metadata) ---
        const leftDiv = document.createElement('div');
        leftDiv.classList.add('left');
        leftDiv.innerHTML = `
            <p><strong>Date:</strong> ${item.date}</p>
            <p><strong>Ages:</strong> ${item.ages}</p>
            <p><strong>Genre:</strong> ${item.genre}</p>
            <p><strong>Rating:</strong> ${item.stars}</p>
        `;

		// --- Middle Column (Title, Image, Description) ---
        const middleDiv = document.createElement('div');
        middleDiv.classList.add('middle');
        middleDiv.innerHTML = `
            <h2 class="book-title">${item.title}</h2>
            <img src="${item.imgSrc}" alt="${item.imgAlt}">
            <p>${item.description}</p>
        `;

		// --- Right Column (Filter lists) ---
		/*
        const rightDiv = document.createElement('div');
        rightDiv.classList.add('right');
        rightDiv.innerHTML = `
            <p>Filter go here</p>
        `;
		*/

        // Append the columns to the article container
        articleContainer.appendChild(leftDiv);
		articleContainer.appendChild(middleDiv);
		//articleContainer.appendChild(rightDiv);

        // Append the complete article to the 'test' container
        contents.appendChild(articleContainer);
    });
}