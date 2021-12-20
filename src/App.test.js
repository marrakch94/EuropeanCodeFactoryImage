import {render, screen} from '@testing-library/react';
import App from './App';

test('Christmas card', () => {
    render(<App/>);
    const linkElement = screen.getByText( "<svg>");
    expect(linkElement).toBeInTheDocument();
});
