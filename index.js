import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

class HelloMessage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>Hello {this.props.name}</Title>
        <br />
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
      </Wrapper>
    );
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<HelloMessage name="Dave" />, mountNode);
