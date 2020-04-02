import React, { useContext } from 'react';
import { ThemeContext, LocaleContext } from './context/context'
import Provider from './context/context'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Toolbar />
      </Provider>
    );
  }
}

class Toolbar extends React.Component {

  // ----- TANPA STATIC ------

  // render() {
  //   return (
  //     <ThemeContext.Consumer>
  //       {
  //         ({ theme }) => (
  //           <div className={`App ${theme === 'white' ? 'dark' : 'white'}`} style={toolbarStyle}>
  //             <ThemedButton theme={theme} />
  //           </div>
  //         )
  //       }
  //     </ThemeContext.Consumer>
  //   );
  // }

  // ----- DENGAN STATIC ------

  static contextType = ThemeContext

  render() {
    return (
      <div className={`App ${this.context.theme === 'white' ? 'dark' : 'white'}`} style={toolbarStyle}>
        <ThemedButton theme={this.context.theme} />
      </div>
    );
  }
}

const toolbarStyle = {
  height: window.innerHeight
}

function ThemedButton(props) {
  const { theme, onChangeTheme } = useContext(ThemeContext);
  const { locale, onChangeLocale } = useContext(LocaleContext);

  return (
    <>
      <button
        onClick={() => onChangeLocale()}
        className={`btn ${theme}`}
      >{locale === 'en' ? 'Change Lenguage' : 'Ubah Bahasa'}</button>
      <button
        onClick={() => onChangeTheme()}
        className={`btn ${theme}`}
      >{locale === 'en' ? 'Change Theme' : 'Ubah Tema'}</button>
    </>
  );
}

export default App;
