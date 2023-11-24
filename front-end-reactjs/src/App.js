import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import TopNavigationBar from './components/TopNavigationBar';
import BottomFooter from './components/BottomFooter.js';
import Login from './components/Login';
import Register from './components/Register';
import Mainpage from "./components/MainPage";
import Error404 from "./components/Error404";


function App() {

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

const AppContent = () => {
  const location = useLocation();
  const isLogRegPath = location.pathname === '/' || location.pathname === '/register';

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          {!isLogRegPath && <TopNavigationBar />}
          <div className="container mx-auto">
              <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/mainpage" component={Mainpage}/>
                <Route path="*" component={Error404}/>
              </Switch>
          </div>
        </div>
        <footer className="border-t-4">
          {!isLogRegPath && <BottomFooter />}
        </footer>
      </div>
    </>
  );

}
export default App;
