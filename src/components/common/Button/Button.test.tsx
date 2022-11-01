import Button from '.';

import { render, screen } from '@testing-library/react';

describe('<Button />', () => {
    test('renders Login button with default args', () => {
        render(<Button size="xLarge" color="orange">로그인</Button>);
        const buttonElement = screen.getByText('로그인'); // getByText는 쿼리함수, 이 함수를 사용하면 텍스트를 사용해서 원하는 DOM 을 선택 가능
        expect(buttonElement).not.toBeNull();
    });
});
