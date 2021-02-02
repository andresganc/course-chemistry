
// Repositories
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// Views
import ViewsFlexContainer from './views/ViewsFlexContainer'
import ViewsGridContainer from './views/ViewsGridContainer'
import ViewsButtons from './views/ViewsButtons'
import ViewsTypography from './views/ViewsTypography'
import ViewsMenu from './views/ViewsMenus'




// Styles
import './assets/css/app.css'

function App() {
  return (
    <Router>
      <div>
        <ViewsMenu />
        <ViewsFlexContainer />
        <ViewsGridContainer />
        <ViewsButtons />
        <ViewsTypography />
      </div>
    </Router>
    
  );
}

export default App;
