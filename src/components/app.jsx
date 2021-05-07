import { useState } from 'react';

import SignIn from './pages/sign-in';
import Flag from './pages/flag';
import Alert from './utils/alert';

const App = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [alerts, setAlerts] = useState([]);

  return (
    <div className="container">
      {accessToken ? <Flag /> : <SignIn setAccessToken={setAccessToken} setAlerts={setAlerts} />}
      <Alert alertsState={[alerts, setAlerts]} />
    </div>
  );
};

export default App;
