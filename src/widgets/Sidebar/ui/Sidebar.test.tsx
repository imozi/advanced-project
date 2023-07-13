/* eslint-disable i18next/no-literal-string */
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithTranslation } from 'shared/lib/tests';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('test render', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toogle', () => {
    renderWithTranslation(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
