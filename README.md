# React Payments Frontend

This project is a TypeScript React application that serves as a frontend for a payments system. It displays a list of payments in a table format, with features including pagination and date range filtering.

## Features

- Display payments in a table
- Pagination
- Date range filtering
- Built with React and TypeScript
- Styled with Tailwind CSS (pre-configured)

## Prerequisites

# React Payments Frontend

This project is a TypeScript React application that serves as a frontend for a payments system. It displays a list of payments in a table format, with features including pagination and date range filtering.

## Features

- Display payments in a table
- Pagination
- Date range filtering
- Built with React and TypeScript
- Styled with Tailwind CSS (pre-configured)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- The `payments-api` project running locally (see Backend API section below)

## Setup

To set up the project locally, follow these steps:

1. Clone the repository:

   ```
   git clone <repository-url>
   cd react-payments-frontend
   ```

2. Install the dependencies:

   ```
   npm install
   ```

## Backend API

This frontend application is designed to work with the `payments-api` project. Before running this frontend, ensure that:

1. You have cloned and set up the `payments-api` project.
2. The `payments-api` server is running on `http://localhost:3001`.

If the API is running on a different URL, you may need to update the `fetchPayments` function in `src/App.tsx` to point to the correct URL.

## Running the Application

To start the development server:

```
npm start
```

This will run the app in development mode:

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- The page will automatically reload if you make changes to the code.
- You will see any lint errors in the console.

## Project Structure

- `src/App.tsx`: Main application component
- `src/components/`:
  - `PaymentsTable.tsx`: Component for rendering the payments table
  - `Pagination.tsx`: Component for pagination controls
  - `DateRangePicker.tsx`: Component for date range selection
- `src/index.css`: Main CSS file with Tailwind directives
- `tailwind.config.js`: Tailwind CSS configuration
- `postcss.config.js`: PostCSS configuration for Tailwind

## Tailwind CSS

Tailwind CSS is pre-configured in this project. You can start using Tailwind classes in your components right away. If you need to customize the Tailwind configuration, you can do so in the `tailwind.config.js` file.

## Contributing

Contributions to this project are welcome. Please ensure you update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
