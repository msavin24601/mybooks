document.addEventListener('DOMContentLoaded', () => {
    loadBooks();
});

async function loadBooks() {
    const fictionContainer = document.getElementById('fiction-books');
    const scifiContainer = document.getElementById('scifi-books');

    fictionContainer.innerHTML = '<li class="loading">Loading books...</li>';
    scifiContainer.innerHTML = '<li class="loading">Loading books...</li>';

    try {
        const response = await fetch('data/books.json');

        if (!response.ok) {
            throw new Error('Failed to load books');
        }

        const data = await response.json();

        renderBookList(fictionContainer, data.fiction);
        renderBookList(scifiContainer, data.scienceFiction);

    } catch (error) {
        console.error('Error loading books:', error);
        fictionContainer.innerHTML = '<li class="empty-state">Could not load books. Please try again later.</li>';
        scifiContainer.innerHTML = '<li class="empty-state">Could not load books. Please try again later.</li>';
    }
}

function renderBookList(container, books) {
    if (!books || books.length === 0) {
        container.innerHTML = '<li class="empty-state">No books to display yet.</li>';
        return;
    }

    container.innerHTML = books.map(book => createBookItem(book)).join('');
}

function createBookItem(book) {
    return `
        <li class="book-item">
            <div class="book-header">
                <div class="book-info">
                    <h3 class="book-title">${escapeHtml(book.title)}</h3>
                    <p class="book-author">by ${escapeHtml(book.author)}</p>
                </div>
                <span class="book-year">${book.year}</span>
            </div>
            <p class="book-description">${escapeHtml(book.description)}</p>
        </li>
    `;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
