import React, {useContext} from 'react'
import {FormattedMessage} from 'react-intl'
import { myContext } from '../Intel'

function Head(){
    const { state, dispatch } = useContext(myContext);
    const changeLang = () => {
        const newLang = state === 'en' ? 'zh' : 'en'
        dispatch({type: newLang})
    }
    return <div>
        <FormattedMessage id='hello'/>
        <button onClick={changeLang}>{state==='zh' ? '英文' : '中文'}</button>
    </div>
}

export default Head