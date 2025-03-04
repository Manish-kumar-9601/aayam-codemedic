import CodeMirror from '@uiw/react-codemirror';
import {  loadLanguage } from '@uiw/codemirror-extensions-langs';
import { xcodeDark } from '@uiw/codemirror-theme-xcode';
const OutputEditor=({myTheme,responseValue,editorLang})=>{
  //  console.log(editorLang);
 console.log(responseValue);
 return (
    <>
         
      <CodeMirror
      value={responseValue? responseValue:'' }
      height="200px"
      theme={  myTheme ? myTheme :xcodeDark}
      extensions={[loadLanguage( editorLang)]}
      readOnly
        />
        </>
 )   
}
export default OutputEditor