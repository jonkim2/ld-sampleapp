import React, { } from 'react';
import { useFlags, withLDProvider, useLDClient } from 'launchdarkly-react-client-sdk';
import logo from './linkedinlogo.png';
import './App.css';
import AdBanner from './AdBanner'
import AdBanner2 from './AdBanner2'
import Header from './header';
import LoginBox from './LoginBox';

function App() {
  const { advertisementBanner,urlChange, newHeader } = useFlags();
  const ldClient = useLDClient();

  const handleLoginSubmit = (firstName, email) => {
    if (ldClient) {
      ldClient.identify({
        key: email,
        name: firstName,
        email: email
      });
    }
  };

  return (
    <div className="App">
    {newHeader ? <Header /> : <div />}
      <h1 className="App-header">
        
          <div className="login-box-container"> 
            <LoginBox onSubmit={handleLoginSubmit} />
          </div>
            Then, please click on the icon below 
              {urlChange ?( 
                <a href="https://www.linkedin.com/in/jonathan-kim-99a6a210a/" target="_blank" rel="noopener noreferrer"> 
                  <img src={logo} alt="logo" className="app-logo" />
                </a>
              ) : (
                <a href="https://www.linkedin.com/in/jonathan-kim-99a6a210a/details/recommendations/?detailScreenTabIndex=0" target="_blank" rel="noopener noreferrer"> 
                  <img src={logo} alt="logo" className="app-logo" />
                </a>
              )} 
             {/*   {imageSwitch ? <img src={ldlogo} className={animate} alt="logo" /> : <img src={logo} className={animate} alt="logo" />}    */}
      </h1>
      {advertisementBanner ? <AdBanner /> : <AdBanner2 />}
    </div>
  );
}

export default withLDProvider({
  clientSideID: '<insert client side id here>',
  context: {
    kind: "user",
    key: "anonymous"
  }
})(App);
