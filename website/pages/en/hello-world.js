'use strict'

const React = require('react')
const CompLibrary = require('../../core/CompLibrary')
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

function HelloWorld (props) {
  return (
    <Container>
      <h1>Hello World!</h1>
      <p>I can write jsx here!</p>
    </Container>
  )
}

module.exports = HelloWorld
