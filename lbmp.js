// Fetch books from API endpoint
function fetchBooks(page) {
    // Make API request to fetch books
    // Replace <API_ENDPOINT> with your actual API endpoint
    const apiEndpoint = `<API_ENDPOINT>?page=${page}`;
    const loadingAnimation = document.getElementById('loading-animation');
  loadingAnimation.style.display = 'flex';
  // Fetch books from API endpoint
function fetchBooks() {
    // Replace <API_ENDPOINT> with your actual API endpoint for fetching books
    const apiEndpoint = "<API_ENDPOINT>";
  
    // Fetch data from the API
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        // Process the fetched data and populate the book list
        const books = data.books;
        const bookList = document.getElementById('books');
  
        // Clear previous book items
        bookList.innerHTML = '';
  
        // Create and append new book items
        books.forEach(book => {
          const bookItem = document.createElement('li');
          bookItem.textContent = `${book.title} by ${book.author}`;
          bookList.appendChild(bookItem);
        });
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }
  
  // Initial fetch of books on page load
  fetchBooks();
  
  
    // Fetch data from the API
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        // Process the fetched data and populate the book list
        const books = data.books;
        const bookList = document.getElementById('books');
  
        // Clear previous book items
        bookList.innerHTML = '';
  
        // Create and append new book items
        books.forEach(book => {
          const bookItem = document.createElement('li');
          bookItem.textContent = `${book.title} by ${book.author}`;
          bookList.appendChild(bookItem);
        });
  
        // Update book count
        const bookCount = document.getElementById('book-count');
        bookCount.textContent = `Total Books: ${data.totalCount}`;
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }
  
  // Handle search input change event
  function handleSearchInputChange(event) {
    const searchTerm = event.target.value;
  // Signup form submit event handler
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
  
    // Perform signup logic
    // Replace with your signup logic, e.g., API request
  
    // Clear form fields
    document.getElementById('signup-name').value = '';
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';
  });
  
  // Login form submit event handler
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    // Perform login logic
    // Replace with your login logic, e.g., API request
  
    // Clear form fields
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
  });
  
    // Make API request to get search suggestions
    // Replace <API_ENDPOINT> with your actual API endpoint for search suggestions
    const apiEndpoint = `<API_ENDPOINT>?search=${searchTerm}`;
  
    // Fetch data from the API
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        const suggestions = data.suggestions;
        const searchSuggestions = document.getElementById('search-suggestions');
  
        // Clear previous suggestions
        searchSuggestions.innerHTML = '';
  
        // Create and append new suggestions
        suggestions.forEach(suggestion => {
          const suggestionItem = document.createElement('li');
          suggestionItem.textContent = suggestion;
          searchSuggestions.appendChild(suggestionItem);
        });
      })
      .catch(error => {
        console.error('Error fetching search suggestions:', error);
      });
  }
  // Fetch data from the API
  fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
      const suggestions = data.suggestions;
      const searchSuggestions = document.getElementById('search-suggestions');

      // Clear previous suggestions
      searchSuggestions.innerHTML = '';

      // Create and append new suggestions
      suggestions.forEach(suggestion => {
        const suggestionItem = document.createElement('li');
        suggestionItem.textContent = suggestion;
        searchSuggestions.appendChild(suggestionItem);
      });
    })
    .catch(error => {
      console.error('Error fetching search suggestions:', error);
    });
// Simulated sample search suggestions
const sampleSuggestions = ['Suggestion 1', 'Suggestion 2', 'Suggestion 3', 'Suggestion 4', 'Suggestion 5'];

// Function to handle search input change event
function handleSearchInputChange(event) {
  const searchTerm = event.target.value;
  const searchSuggestions = document.getElementById('search-suggestions');

  // Clear previous suggestions
  searchSuggestions.innerHTML = '';

  // Filter suggestions based on search term
  const filteredSuggestions = sampleSuggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add filtered suggestions to the list
  filteredSuggestions.forEach(suggestion => {
    const suggestionItem = document.createElement('li');
    suggestionItem.textContent = suggestion;
    searchSuggestions.appendChild(suggestionItem);
  });
}

// Attach event listener to search input
document.getElementById('search-input').addEventListener('input', handleSearchInputChange);


// Attach event listener to search input
document.getElementById('search-input').addEventListener('input', handleSearchInputChange);
  // Attach event listeners
  document.getElementById('search-input').addEventListener('input', handleSearchInputChange);
  
  // Initial fetch of books on page load
  fetchBooks(1);
  