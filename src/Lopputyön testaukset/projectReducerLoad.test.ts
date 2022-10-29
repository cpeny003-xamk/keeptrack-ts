import { Project } from '../projects/Project';
import { MOCK_PROJECTS } from '../projects/MockProjects';
import { initialProjectState, projectReducer } from '../projects/state/projectReducer';
import { LOAD_PROJECTS_SUCCESS } from '../projects/state/projectTypes';

describe('project reducer', () => {
  test('testataan yksittäisen projektin poistoa', () => {

    //Testauksen lähtötilanne, testataan mock-projekteilla (6 kpl).
    const currentState = { ...initialProjectState, projects: MOCK_PROJECTS };

    //Ladattavat projektit
    const ladattavat = {
      projects : MOCK_PROJECTS,
      page : 1
    }

    //Testauksen lopputilanne, jota tavoitellaan mikäli funktio toimii
    const latausOnnistui = {
      ...initialProjectState,
      loading : false,
      page : ladattavat.page,
      projects : ladattavat.projects,
      error : ''
    };

    //Jos lataus onnistuu, tulisi palautusarvojen olla sama
    expect(
      projectReducer(currentState, {
        type: LOAD_PROJECTS_SUCCESS,
        payload: ladattavat,
      })
    ).toEqual(latausOnnistui);
  });
});