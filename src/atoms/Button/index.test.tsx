import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from '.';

describe('Button component', () => {
    test('renders a button element', () => {
        render(<Button />);

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    });

    test('is enabled by default', () => {
        render(<Button />);

        const button = screen.getByRole('button');

        expect(button).not.toHaveAttribute('disabled');
    });

    test('can be disabled by passing a prop', () => {
        render(<Button disabled={ true } />);

        const button = screen.getByRole('button');

        expect(button).toHaveAttribute('disabled');
    });

    test('accepts a custom className', () => {
        render(<Button className="test"/>);

        const button = screen.getByRole('button');

        expect(button).toHaveClass('test');
    });

    test('renders children', () => {
        render(<Button>Test</Button>);

        const element = screen.queryByText('Test');

        expect(element).toBeInTheDocument();
    });
})

