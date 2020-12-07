import React from 'react';
import Footer from './components/Footer';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <div id="wrapper">
      <Sidebar />

      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <Topbar />
          <Dashboard />
          <Footer />
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
      {/* <!-- End of Page Wrapper --> */}
    </div>
  );
};

export default App;
