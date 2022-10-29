import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectDetail from '../projects/ProjectDetail';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../state';
import { MOCK_PROJECTS } from '../projects/MockProjects';

describe('<ProjectDetail/>', () => {
  const setup = () =>
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProjectDetail project={MOCK_PROJECTS[0]}/>
        </MemoryRouter>
      </Provider>
    );

  beforeEach(() => {});

  test('Projects-sivun tulisi renderöityä ilman kaatumista', () => {
    setup();
    expect(screen).toBeDefined();
  });

  test('Testataan, näkyykö yksittäisen projektin tiedot sivulla', () => {
    setup();
    expect(screen.getByRole('heading')).toHaveTextContent(MOCK_PROJECTS[0].name)
    expect(screen.getByRole('img')).toBeDefined()
    expect(screen.getByText(MOCK_PROJECTS[0].description))
    expect(screen.getByText(`Budget : ${(MOCK_PROJECTS[0].budget)}`))
    expect(screen.getByText(`Signed: ${MOCK_PROJECTS[0].contractSignedOn.toLocaleDateString()}`))
  });
})
