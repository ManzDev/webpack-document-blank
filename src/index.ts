import './index.css';
import webpackImage from './assets/webpack-document-blank.png';

const app = document.querySelector('#app');
app.innerHTML = `
    <h1>Webpack Document Blank<h1>
    <img src="${webpackImage}" alt="webpack-document-blank starter-kit">
`;
