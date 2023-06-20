import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from './Layout';

describe('Layout Component', () => {
  it('renders with children and default title', () => {
    const { getByText, getByRole } = render(
      <Layout>
        <div>Content</div>
      </Layout>
    );

    expect(getByText('Content')).toBeInTheDocument();
    expect(getByRole('heading')).toHaveTextContent('This is the default title');
  });

  it('renders with provided title', () => {
    const { getByRole } = render(<Layout title="Custom Title" />);

    expect(getByRole('heading')).toHaveTextContent('Custom Title');
  });
});
