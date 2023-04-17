import { render, screen } from '@testing-library/react';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import React from "react";

describe('App', () => {
  it('renders headline', () => {
    render(
        <BrowserRouter>
          <App title="React" />
        </BrowserRouter>
    );

    screen.debug();

    // check if App components renders headline
  });
});