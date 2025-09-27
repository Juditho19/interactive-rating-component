# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help me improve your coding skills by building realistic projects.
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot


<img width="1280" height="555" alt="Screenshot 2025-09-27 at 14-15-05 interactive-rating-component" src="https://github.com/user-attachments/assets/fb66f8d3-7ce3-4782-bb94-ceb3750fcd0d" />
<img width="1280" height="555" alt="Screenshot 2025-09-27 at 14-14-48 interactive-rating-component" src="https://github.com/user-attachments/assets/28d3b525-b694-42a2-b097-95791a949c8e" />

### Links

- Solution URL: [GitHub Repository](https://github.com/Juditho19/interactive-rating-component)
- Live Site URL: [Live Demo](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React Router ](https://reactrouter.com/) - React framework
- [Tailwind CSS ](https://tailwindcss.com/) - For styling


### What I learned

This project helped me understand several key React and Tailwind concepts:
To see how you can add code snippets, see below:

```jsx
const [rating, setRating] = React.useState(null);

const getButtonStyle = (buttonNumber) => {
  if (rating === buttonNumber) {
    return 'bg-White text-darkerGrey';
  }
  return 'bg-darkGrey hover:bg-Orange hover:text-darkerGrey';
};
```
```React Router Navigation with State:
const handleSubmit = () => {
  if (rating) {
    navigate('/thanks', { state: { rating } });
  }
};
```
The main challenge was understanding how to pass data between routes using React Router's navigation state, and properly extracting that data using the useLocation hook with optional chaining.

### Continued development

Areas I want to continue focusing on in future projects:

- Advanced React patterns - Context API, custom hooks, and component composition
- Responsive design - Better understanding of Tailwind's responsive utilities and mobile-first approach
- Accessibility - Implementing proper ARIA attributes and keyboard navigation
- Animation - Adding smooth transitions and micro-interactions with Tailwind and CSS

### Useful resources

- [React Router Documentation ](https://reactrouter.com/en/main) - Essential for understanding navigation and state passing
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Comprehensive guide for utility classes and customization
- [React useState Hook](https://react.dev/reference/react/useState) - Clear explanations of state management in functional components


## Author

- Website - [Judith Onyejekwe](https://judithonyejekwe.my.canva.site/my-portfolio-website)
- Frontend Mentor - [@Juditho19](https://www.frontendmentor.io/profile/Juditho19)
