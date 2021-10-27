import GithubJobsApi from './API/Api';
import Header from './Components/Header/Header'
import LandingPage from './View/LandingPage/LandingPage'
import JobsInformation from './View/JobsInformation/JobsInformation'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {

  const githubAPI = new GithubJobsApi();

  return (
    <Router>
      <div className="demo_wrap"></div>
      <div className="demo_wrap_2"></div>
      <Switch>
        <Route exact path="/">
          <Header />
          <LandingPage apiGithub={githubAPI} />
        </Route>
        <Route exact path="/jobs/:id">
          <Header />
          <JobsInformation />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
