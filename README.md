# Job Board Application

## Description

A full-stack job board application that crawls job postings from sites like Naukri.com and LinkedIn Jobs, displaying them in an interactive UI.

## Features

- Fetch job listings based on keywords.
- Display job details including title, company, location, experience, and application link.
- Responsive UI with filters for location and experience.
- Search functionality for job titles.
- Auto-refresh job listings every 24 hours.
- Job detail page with an apply button.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/job-board.git
   ```
2. Navigate to the project directory:
   ```bash
   cd job-board
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   node server.js
   ```
2. Access the application at `http://localhost:5000`.

## API Endpoints

- `GET /api/jobs`: Fetch job listings based on query parameters.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
