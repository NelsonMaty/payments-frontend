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

3. Configure the backend URL:
   - Open `src/App.tsx`
   - Modify the `fetchPayments` function to point to your backend API URL.

## Running the Application

To start the development server:

```
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Building for Production

To create a production build:

```
npm run build
```

This will create a `build` folder with the production-ready files.

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

[MIT](https://choosealicense.com/licenses/mit/) payments-frontend
