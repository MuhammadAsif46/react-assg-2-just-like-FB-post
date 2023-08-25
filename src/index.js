import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import profileImg1 from "./img/my-image.jpg";
import profileImg2 from "./img/post-man-img.jpg";
import profileImg3 from "./img/post-man2-img.jpg";
import postImg1 from "./img/post-car-img.jpg";
import postImg2 from "./img/post-quaid-img.jpg";
import postImg3 from "./img/post-img.jpg";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
    profileImg={profileImg1}
    name="Muhammad Asif"
    date="12-Jan-2022 3:50 pm"
    img={postImg1}
    bodyText="Quick warning though: this tutorial is compleeete. And by that I mean looong. I turned this into a full-fledged free 5-day course, and I made a nice-looking PDF you can read on your iPad or [whatever Android device is cool these days]. Drop your email in the box to get both. (it’s spread over 5 days, but you can jump ahead whenever you want)."
    />
    <App 
    profileImg={profileImg2}
    name="Jhon Dave"
    date="01-Jan-2023 7:30 pm"
    img={postImg2}
    bodyText="Quick warning though: this tutorial is compleeete. And by that I mean looong. I turned this into a full-fledged free 5-day course, and I made a nice-looking PDF you can read on your iPad or [whatever Android device is cool these days]. Drop your email in the box to get both. (it’s spread over 5 days, but you can jump ahead whenever you want)."
    />
    <App 
    profileImg={profileImg3}
    name="Robert Son"
    date="29-Dec-2023 5:30 pm"
    img={postImg3}
    bodyText="Quick warning though: this tutorial is compleeete. And by that I mean looong. I turned this into a full-fledged free 5-day course, and I made a nice-looking PDF you can read on your iPad or [whatever Android device is cool these days]. Drop your email in the box to get both. (it’s spread over 5 days, but you can jump ahead whenever you want)."
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
