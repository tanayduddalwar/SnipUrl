# URL Shortener

This is a simple URL shortener web application built using Node.js, Express.js, MongoDB, HTML, and CSS. The application allows users to shorten URLs, store them in a database for future use, and view the shortened URLs along with the number of times they have been visited.

## Features

- **Shorten URLs**: Users can enter any URL and generate a shortened version of it.
- **Store Shortened URLs**: The shortened URLs are stored in a MongoDB database for future use.
- **View Shortened URLs**: Users can view the list of shortened URLs in a table format.
- **Visit Count**: The application tracks the number of times each shortened URL has been visited and displays it in the table.

## Technologies Used

- **Node.js**: A JavaScript runtime used for building server-side applications.
- **Express.js**: A web application framework for Node.js used for building web applications and APIs.
- **MongoDB**: A NoSQL database used for storing the shortened URLs and visit counts.
- **HTML**: Used for creating the structure and content of the web pages.
- **CSS**: Used for styling the HTML elements and improving the visual appearance of the web pages.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
git clone https://github.com/your-username/url-shortener.git

2. Install dependencies:
    "ejs": "^3.1.9",
        "express": "^4.18.3",
        "mongoose": "^8.2.2",
        "nodemon": "^3.1.0",
        "shortid": "^2.2.16"

3. Set up MongoDB:
- Install MongoDB locally or use a cloud-hosted MongoDB service.
- Update the MongoDB connection URL in the application configuration.

4. Start the server:
npm start


5. Access the application:
- Open your web browser and navigate to `http://localhost:8000` to access the URL shortener application.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests to contribute new features, improvements, or bug fixes.

