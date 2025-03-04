import CodeMirror from '@uiw/react-codemirror';
import { useState } from 'react';
import { langNames, loadLanguage } from '@uiw/codemirror-extensions-langs';
import { xcodeDark } from '@uiw/codemirror-theme-xcode';
const InputEditor = ({ myTheme, setValue, setEditorLang }) =>
{

    const [lang, setLang] = useState(langNames[0])
    const langHandler = (e) =>
    {
        setEditorLang(e.target.value)
        setLang(e.target.value)
    }
    return (
        <>
            <select onChange={langHandler} className='mx-5' >
                {langNames.map((language, index) => (
                    <option value={language} key={index} >{language}</option>
                ))}
            </select>
            <CodeMirror
                
                value="Enter Code"
                height="200px"
                style={{padding:'0px'}}
                theme={myTheme ? myTheme : xcodeDark}
                extensions={[loadLanguage('markdown')]}
            
                onChange={(value, viewUpdate) =>
                {
                    setValue(value)
                }}
            />
        </>
    )
}
export default InputEditor