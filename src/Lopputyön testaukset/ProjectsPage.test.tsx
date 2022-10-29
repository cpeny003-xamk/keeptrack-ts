import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectsPage from '../projects/ProjectsPage';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../state';
import { loadProjects } from '../projects/state/projectActions';
import userEvent from '@testing-library/user-event';

describe('<ProjectsPage />', () => {
  const setup = () =>
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProjectsPage />
        </MemoryRouter>
      </Provider>
    );

  beforeEach(() => {});

  test('ProjectsPage-komponentin tulisi renderöityä ilman kaatumista', () => {
    setup();
    expect(screen).toBeDefined();
  });

  test('Testataan Projects-pagen osia, eli "Loading..." teksti, Projects-otsikko sekä "More"-nappi', async () => {
    setup();
    expect(screen.getByText("Loading..."))
    expect(screen.getByRole('heading')).toHaveTextContent('Projects');
    expect(await screen.findByRole('button', {name : /more.../i})).toBeInTheDocument();
    userEvent.setup()
    await userEvent.click(screen.getByRole('button', { name: /more.../i }))
  });
})
