# Tender Download System

This is a Tender Download System application that allows users to search for and download tenders. The application ensures that only authenticated users can access certain pages.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [License](#license)

## Features

- User authentication
- Search tenders functionality
- Secure routes for authenticated users
- Responsive design

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18.x or later)
- [npm](https://www.npmjs.com/) (v10.x or later)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Gbiterium/tender-download.git
    cd tender-download-system
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

### Usage

1. Start the development server:

    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Authentication

To access the Tenders page, you need to log in with the following credentials:

- **Username:** `user`
- **Password:** `password`

The login page will redirect you to the Tenders page upon successful authentication.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
