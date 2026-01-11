# My Favorite Books

A static website showcasing my favorite books and the impact they've had on me.

## Development

This is a static website with no build process. To run locally:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in a browser. A local server is required because the JavaScript fetches JSON data.

## Structure

- `index.html` - Page structure
- `script.js` - Fetches and renders book data
- `styles.css` - Vintage book theme styling
- `data/books.json` - Book entries with title, author, year, and description
