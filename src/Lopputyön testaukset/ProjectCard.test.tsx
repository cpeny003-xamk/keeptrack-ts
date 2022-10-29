import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../projects/ProjectCard';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../state';
import { MOCK_PROJECTS } from '../projects/MockProjects';
import userEvent from '@testing-library/user-event';

describe('<ProjectCard/>', () => {
  let handleEdit: jest.Mock;
  
  const setup = () =>
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProjectCard project={MOCK_PROJECTS[0]} onEdit={handleEdit}/>
        </MemoryRouter>
      </Provider>
    );

  beforeEach(() => {
    handleEdit = jest.fn();
  });

  test('Yksittäisen ProjectCard-elementin tulisi renderöityä ilman kaatumista', () => {
    setup();
    expect(screen).toBeDefined();
  });

  test('Testataan, näkyykö ProjectCard-elementti oikein', () => {
    setup();
    expect(screen.getByRole('heading')).toHaveTextContent(MOCK_PROJECTS[0].name)
    expect(screen.getByRole('img')).toBeDefined()
  });

  test('Testataan Edit-painikkeen toimivuus', async () => {
    setup();
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /edit/i }));
    expect(handleEdit).toBeCalledWith(MOCK_PROJECTS[0]);
  });
})
