import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import Counter from '.';

describe('Counter component', () => {
    test('renders two buttons', () => {
        render(<Counter />);

        const buttons = screen.getAllByRole('button');

        expect(buttons).toHaveLength(2);
    });

    test('has default count 0', () => {
        render(<Counter />);

        const counter = screen.getByTestId('counter');

        expect(counter).toHaveTextContent('0');
    });

    test('increments count when clicked on the increment button', () => {
        render(<Counter />);

        const counter = screen.getByTestId('counter');
        const [_, incrementButton] = screen.getAllByRole('button');

        userEvent.click(incrementButton);

        expect(counter).toHaveTextContent('1');
    });

    test('decrements count when clicked on the decrement button', () => {
        render(<Counter />);

        const counter = screen.getByTestId('counter');
        const [decrementButton, incrementButton] = screen.getAllByRole('button');

        userEvent.click(incrementButton);
        userEvent.click(incrementButton);

        expect(counter).toHaveTextContent('2');

        userEvent.click(decrementButton);

        expect(counter).toHaveTextContent('1');
    });

    test('does not allow decrement past 0', () => {
        render(<Counter />);

        const counter = screen.getByTestId('counter');
        const [decrementButton, _] = screen.getAllByRole('button');

        expect(counter).toHaveTextContent('0');

        expect(decrementButton).toBeDisabled();

        userEvent.click(decrementButton);

        expect(counter).toHaveTextContent('0');
    });
})
