

import React from 'react';
import '../Cfiles/Skills.css';
import git from '../images/git.png';
import html from '../images/html.png';
import css from '../images/css.png';
import javascript from '../images/javascript.png';
import tailwind from '../images/tailwind.png';
import reactImage from '../images/react.png';
import mongodb from '../images/mongoDB.png';
import graphql from '../images/graphql.png';
import arduino from '../images/arduino.png';
import hflogo from '../images/hf-logo.png';
import java from '../images/java.png';
import keras from '../images/keras.png';
import nextjs from '../images/nextjs.png';
import pytorch from '../images/pytorch.png';
import ros from '../images/ros.png';
import tensorflow from '../images/Tensorflow_logo.png';
import scikit from '../images/sci-kit.jpeg';
import python from '../images/python.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';




const Skills = () => {

const techs = [
  {
    id: 1,
    src: arduino,
    title: "Arduino",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: hflogo,
    title: "Hugging Face",
    style: "shadow-orange-500",
  },
  {
    id: 3,
    src: java,
    title: "JAVA",
    style: "shadow-orange-500",
  },
  {
    id: 4,
    src: keras,
    title: "Keras",
    style: "shadow-orange-500",
  },
  {
    id: 5,
    src: nextjs,
    title: "NextJS",
    style: "shadow-orange-500",
  },
  {
    id: 5,
    src: python,
    title: "Python",
    style: "shadow-orange-500",
  },
  {
    id: 5,
    src: pytorch,
    title: "Pytorch",
    style: "shadow-orange-500",
  },
  {
    id: 5,
    src: ros,
    title: "ROS",
    style: "shadow-orange-500",
  },
  {
    id: 5,
    src: tensorflow,
    title: "TensorFlow",
    style: "shadow-orange-500",
  },
  {
    id: 5,
    src: scikit,
    title: "SCIKIT",
    style: "shadow-orange-500",
  },
  {
    id: 5,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 6,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 7,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: reactImage,
    title: "React",
    style: "shadow-blue-600",
  },
  {
    id: 5,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-sky-400",
  },
  {
    id: 6,
    src: mongodb,
    title: "MongoDB",
    style: "shadow-green-400",
  },
  {
    id: 7,
    src: graphql,
    title: "GraphQL",
    style: "shadow-pink-400",
  },
  {
    id: 8,
    src: git,
    title: "Git",
    style: "shadow-gray-400",
  },

];

  return (
    <div className="skills-container">
      <div className="skills-content">
        <div className="skills-header">
          
        </div>

        <div className="skills-grid">
          {techs.map(({ id, src, title }) => (
            <div key={id} className="skill-card">
              <img src={src} alt={title} className="skill-icon" />
              <p className="skill-name">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Skills;

