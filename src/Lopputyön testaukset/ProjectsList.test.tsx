import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectsPage from '../projects/ProjectsPage';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../state';
import ProjectList from '../projects/ProjectList';
import { MOCK_PROJECTS } from '../projects/MockProjects';

describe('<ProjectList />', () => {


  const setup = () =>
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProjectList projects={MOCK_PROJECTS} />
        </MemoryRouter>
      </Provider>
    );

  beforeEach(() => {});

  test('ProjectsList-komponentin tulisi renderöityä ilman kaatumista', () => {
    setup();
    expect(screen).toBeDefined();
  });

  test('Mock-projektit, joita on 6, tulisi näkyä listalla.', () => {
    setup();
    expect(screen.getAllByRole('heading')).toHaveLength(6);
    expect(screen.getAllByRole('img')).toHaveLength(6);
    expect(screen.getAllByRole('button', { name: /edit/i })).toHaveLength(6);
  });
})
