import React, {useReducer} from 'react'
import { addLocaleData, IntlProvider} from 'react-intl'; /* react-intl imports */
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import zh_CN from "./local/zh_CN"     // import defined messages in Chinese
import en_US from "./local/en_US"     // import defined messages in English
addLocaleData([...en, ...zh]);  // 引入多语言环境的数据  
let messages = {}
    messages['en'] = en_US;
    messages['zh'] = zh_CN;
const myContext = React.createContext();
function reducer(state, action) {
    switch (action.type) {
      case "zh":
        return 'zh';
      case "en":
        return "en"
      default:
        return state;
    }
  }

const Intl = (props) => {
  const [state, dispatch] = useReducer(reducer, 'en');
  return (
    <myContext.Provider value={{ state, dispatch }}>
        <IntlProvider locale={state} messages={messages[state]}>
            {props.children}
        </IntlProvider>
    </myContext.Provider>
  );
}
export { myContext, Intl }

  