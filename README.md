# Weather Journal App

This Weather Journal App is a simple application requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. Users can input the zipCode for specific country, and a short response about how they feel, which gets stored data and displayed on the application.

## Features

- **Record country code**: Input zipCode.
- **Express Server**: Built with Node.js and Express.js.
- **Cross-Origin Support**: Includes CORS for cross-origin allowance.
- **Static Files**: Serves a static `website` directory for frontend files.

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js]
- [npm]

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Saja-Khasati/Weather-Journal-App.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Weather-Journal-App
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

1. Start the server:
   ```bash
   node server.js
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure
```
Weather-Journal-App/
├── .gitignore        # Files to ignore in Git
├── package-lock.json 
├── package.json
├── server.js         # Server logic
├── website/          # Static frontend files
│   ├── index.html    # Main HTML file
│   ├── app.js        # Client-side JavaScript
│   ├── style.css     # Styling for the app
```

## API Endpoints

### `GET /getAll`
- **Description**: Retrieves all stored data.
- **Response**:
  ```json
  {
    "temperature": "",
    "date": "",
    "user_response": ""
  }
  ```

### `POST /add`
- **Description**: Stores weather data from user input.
- **Request Body**:
  ```json
  {
    "temperature": "",
    "date": "",
    "user_response": ""
  }
  ```

## Dependencies

- **express**: Web framework for Node.js
- **body-parser**: Middleware for parsing JSON
- **cors**: Middleware for cross-origin resource sharing


