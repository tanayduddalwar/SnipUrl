# URL Shortener

This URL shortener web application, developed using Node.js, Express.js, MongoDB, HTML, and CSS, enables users to shorten URLs, store them in a database, and track the visit count for each shortened URL.

## Features

- **URL Shortening**: Users can input any URL and receive a shortened version.
- **Persistent Storage**: Shortened URLs are stored in a MongoDB database for future reference.
- **URL Management**: Users can view a list of all shortened URLs in a table format.
- **Visit Tracking**: The application tracks and displays the number of visits for each shortened URL.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web application framework for building APIs and web applications.
- **MongoDB**: NoSQL database for storing shortened URLs and visit counts.
- **HTML**: Markup language for structuring web pages.
- **CSS**: Styling language for enhancing the visual appearance of web pages.

## Getting Started

To run the application locally, follow these steps:

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/tanayduddalwar/SnipUrl.git
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Set Up MongoDB**:
   - Install MongoDB locally or use a cloud-hosted MongoDB service.
   - Update the MongoDB connection URL in the application configuration.

   Alternatively, you can pull the Docker image and run it locally without needing to perform steps 3 and 4:
   ```sh
   docker pull tanayduddalwar/url-shortner-app
   docker run -p 8001:8001 tanayduddalwar/url-shortner-app
   ```

4. **Start the Server**:
   ```sh
   npm start
   ```

5. **Access the Application**:
   - Open your web browser and navigate to `http://localhost:8001` to access the URL shortener application.

6. **Generate Shortened URLs**:
   - Once logged into the application, you can generate shortened URLs for any website. The shortened URLs will be saved in your local storage.

7. **Access Websites Using Shortened URLs**:
   - Use the following URL structure to access websites using the shortened URL: `http://localhost:8001/url/:shortid`

## Contributing

Contributions are welcome! Please feel free to fork the repository and submit pull requests to add new features, improvements, or bug fixes.

---

This formalizes the language and clarifies the steps for using Docker.
