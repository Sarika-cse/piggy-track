# PiggyTrack - Expenditure Tracker

**PiggyTrack** is a simple, user-friendly expenditure tracking application designed to help individuals, especially students, monitor their daily expenses. The application allows users to add, delete, and view expenses in different categories and visualize the data using a pie chart.

## Features

1. **Add Expenses**: Users can input an expense category, description, and amount.
2. **Delete Expenses**: Remove specific expenses from the list.
3. **View Reports**: Generate a pie chart to analyze spending across categories.
4. **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **HTML5**: For structuring the content.
- **CSS3**: For styling and layout.
- **JavaScript**: For interactivity and dynamic content rendering.
- **Chart.js**: To create interactive pie charts for expense visualization.
- **Netlify**: For hosting the application.

## How to Use

1. **Add an Expense**: Enter the category, description, and amount in the form and click the 'Add' button. The expense will be added to the table below.
2. **Delete an Expense**: Click the 'Delete' button next to an expense to remove it.
3. **View Reports**: Click the 'Report' button to view a pie chart of your expenses by category.

## Live Demo

The application is hosted on Netlify. You can access it using the link below:

[**PiggyTrack Live Demo**](https://jolly-tulumba-094619.netlify.app/)

## Folder Structure

```
PiggyTrack/
├── index.html           # Main HTML file
├── styles/
│   └── style.css        # Main CSS file
├── scripts/
│   ├── app.js           # Main JavaScript file (logic and functionality)
│   ├── charts.js        # Graph generation using Chart.js
│   └── storage.js       # Handles storing/retrieving data from localStorage
├── assets/
│   ├── images/          # Icons or images used in the app
│   └── chart.js         # Chart.js library (CDN can also be used)
└── README.md            # Project documentation
```

## How It Works

### Adding Expenses
- The user inputs the expense details in the form.
- On submission, the expense is displayed in a table.

### Deleting Expenses
- Each row in the table has a 'Delete' button that removes the corresponding expense.

### Generating Reports
- The pie chart visualizes expenses based on categories.
- The chart is dynamically updated, ensuring accurate data representation.

### Managing Charts
- To avoid errors when switching between reports, the chart instance is destroyed and reinitialized every time the report is generated.

## Sample Workflow

1. Add an expense under the "Food" category for $50.
2. Add another expense under the "Travel" category for $30.
3. Click "Report" to view a pie chart showing 62.5% for Food and 37.5% for Travel.
4. Delete the "Travel" expense and regenerate the report to see the updated chart.

## Deployment

The project is hosted on Netlify for easy access and sharing. Netlify provides a fast and reliable platform to serve the application.

## Future Enhancements

1. **Backend Integration**: Allow users to save and retrieve expenses using a database.
2. **Authentication**: Enable user login for personalized expense tracking.
3. **Detailed Reports**: Provide more comprehensive analysis options, such as monthly or yearly breakdowns.
4. **Export Data**: Add functionality to download expenses as a CSV file.

## Developer Notes

- Ensure you have a stable internet connection to load external libraries (Chart.js and Lity.js).
- The project is designed to be a beginner-friendly introduction to web development.

---

**PiggyTrack** is a practical project for students and developers to learn and showcase their frontend development skills.
