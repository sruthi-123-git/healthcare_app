# Healthcare App

A responsive web application built with React.js and JavaScript for managing doctor profiles and booking appointments.


## Tools and Libraries Used

- **React.js** — Frontend UI library  
- **JavaScript** — For static typing and better developer experience  
- **Html** — For structuring the user interface
- **CSS Flexbox/Grid** — For responsive layouts  
- **Create React App** — Project scaffolding  


## Features

- View a list of doctors on the landing page  
- View detailed doctor profiles  
- Book appointments through a booking form  
- Navigation using React Router  


## Improvements with More Time

- Implement backend with Node.js/Express and a real database  
- Add user authentication (sign in/sign up)  
- Add form validation and error handling on booking page  
- Enhance UI design with a CSS framework (e.g., Tailwind CSS or Material UI)  
- Add appointment confirmation emails  
- Mobile-specific enhancements for better responsiveness  


## Challenges Faced and Solutions

### Challenge:  
Handling React Router errors with incorrect imports or component exports.  

**Solution:**  
Ensured all components are properly exported as default, and used `<Route path="" element={<Component />} />` syntax in React Router v6.


### Challenge:  
Centering and styling elements responsively without a CSS framework.  

**Solution:**  
Used CSS Flexbox and media queries to create a clean, responsive layout without external dependencies.

