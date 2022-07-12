import React from 'react';
import ReactDOM from 'react-dom/client';
import Comment from './comment';
import Course from './course';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const obj = {
  userName: "Admin",
  content: "Comment Testing",
};

const courseRecord = {
  courses: [
    {
      title: "Build Response Real-World Websites with HTML and CSS",
      instructor: "Jonas Schmedtmann"
    },
    {
      title: "JavaScript from Zero to Hero",
      instructor: "Jonas Schmedtmann"
    },
    {
      title: "The Web Developer Bootcamp",
      instructor: "Colt Steele"
    },
    {
      title: "React - The Complete Guide",
      instructor: "Huy Pham"
    }
  ]
}

const comments = (
  <div>
    <Comment {...obj} />
    <Comment
      userName='User'
      content='I have just commented!'
    />
    <Comment />
  </div>
);

const courses = (
  <div>
    <Course {...courseRecord} />
  </div>
)

root.render([comments, courses]); // Warning: Each child in a list should have a unique "key" prop.