const express = require('express')
const path = require("path");
const React = require('react')
const fs = require('fs');
import { renderToString } from "react-dom/server";
import { getDnsPrefetchLayout, getNextPageLayout, getPreConnectLayout, getPreFetchLayout, getPreLoadLayout, getPreRenderLayout } from "./layout.js";
const App = require('./src/App.js').default

const app = express();


app.use('/assets', (req, res, next) => { console.log(`JS handle- Serving from ${path.join(process.cwd(), 'dist')}`); next() }, 
express.static(path.join(process.cwd(), 'dist')), (req, res) => res.end())

app.use('/assets', (re, res, next) => { console.log(` css handle -> serving from ${path.join(process.cwd(), 'dist')}`) ;next() }, 
express.static(path.join(process.cwd(), 'dist')), (req, res) => res.end())

const getCriticalCss = () => {

  const css = fs.readFileSync('./src/App.css', {encoding:'utf8', flag:'r'})

  return css
}

app.get('/preload', (req, res) => {

  const app = renderToString(<App />);

  const html =  getPreLoadLayout(app, getCriticalCss())

  res.send(html)
})

app.get('/dns-prefetch', (req, res) => {

  const app = renderToString(<App />);

  const html =  getDnsPrefetchLayout(app, getCriticalCss())

  res.send(html)
})

app.get('/preconnect', (req, res) => {

  const app = renderToString(<App />);

  const html =  getPreConnectLayout(app, getCriticalCss())

  res.send(html)
})

app.get('/prefetch', (req, res) => {

  const app = renderToString(<App />);

  const html = getPreFetchLayout(app, getCriticalCss())

  res.send(html)
})

app.get('/prerender', (req, res) => {

  const app = renderToString(<App />);

  const html = getPreRenderLayout(app, getCriticalCss())

  res.send(html)
})

app.get('/next-page', (req, res) => {

  res.send(getNextPageLayout());
})

app.listen(8080 , () => {
  console.log('listining at port 8080')
})
