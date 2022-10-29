import { Project } from '../projects/Project';
import { MOCK_PROJECTS } from '../projects/MockProjects';
import { DELETE_PROJECT_SUCCESS } from '../projects/state/projectTypes';
import { initialProjectState, projectReducer } from '../projects/state/projectReducer';

describe('project reducer', () => {
  test('testataan yksittäisen projektin poistoa', () => {

    //Testauksen lähtötilanne, testataan mock-projekteilla (6 kpl).
    const currentState = { ...initialProjectState, projects: MOCK_PROJECTS };

    //Postettava kohde
    const deletoitava : Project = MOCK_PROJECTS[0];

    //Testauksen lopputilanne, jota tavoitellaan mikäli funktio toimii
    const poistoOnnistui = {
      ...initialProjectState,
      projects: MOCK_PROJECTS.filter((project: Project) => project.id !== MOCK_PROJECTS[0].id)
    };

    //Jos poisto onnistuu, tulisi verrattujen arrayden olla samoja (5)
    expect(
      projectReducer(currentState, {
        type: DELETE_PROJECT_SUCCESS,
        payload: deletoitava,
      })
    ).toEqual(poistoOnnistui);
  });
});