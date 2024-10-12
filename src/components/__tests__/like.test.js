import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Like from '../like'; 

test('Por defecto, muestra "Likes: 0"', () => {
  render(<Like />);
  expect(screen.getByText('Likes: 0')).toBeInTheDocument();
});

test('Incrementa likes al hacer clic en "Like"', () => {
  render(<Like />);
  const likeButton = screen.getByText('Like');
  fireEvent.click(likeButton);
  expect(screen.getByText('Likes: 1')).toBeInTheDocument();
});

test('Decrementa likes al hacer clic en "Dislike"', () => {
  render(<Like />);
  const dislikeButton = screen.getByText('Dislike');
  fireEvent.click(dislikeButton);
  expect(screen.getByText('Likes: -1')).toBeInTheDocument();
});
