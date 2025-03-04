'use client'
import { useState } from "react"
import createTheme from "@uiw/codemirror-themes";

import axios from "axios";
import InputEditor from "../components/InputEditor";
import Button from "../components/Button";
import OutputEditor from "../components/OutputEditor";
import { InputTheme, inputTheme, OutputTheme } from "@/constants";

const Debugger = () =>
{
    const [editorLang, setEditorLang] = useState('javascript')
    const [value, setValue] = useState('')
    const [inputError, setInputError] = useState('')
    const [loading, setLoading] = useState(false)
    const [resOutput, setResOutput] = useState('')
    const [error, setError] = useState('')
    const debuggerHandler = async () =>
    {
        if (value == 'Enter Code' || !value)
        {
            setError('Code is Required !');
        }

        try
        {
            setError('')
            setLoading(true)
            console.log(value, inputError);
            const response = await axios.post('/api/debug', { value, inputError }).then((res) =>
            {
                console.log(res);
                setResOutput(res.data?.debugged)
                setLoading(false)
            })

        } catch (error)
        {
            console.log(error);

        }
    }
    console.log(resOutput,'loading && !resOutput',loading || resOutput);
    return (
        <>
            <InputEditor setEditorLang={setEditorLang} setValue={setValue} myTheme={InputTheme} />
            <label className="flex border px-2 py-4 gap-3  " >
                <span>
                    Error Input
                </span>
                <input type="text" placeholder="Enter error or log" onChange={e => setInputError(e.target.value)} />
            </label>
            <Button handler={debuggerHandler} btnName={loading ? 'Debugging' : 'Debug'} />
            <p className="text-red-500" >

                {error}
            </p>
            {
                loading && !resOutput?<></>: <OutputEditor editorLang={editorLang} myTheme={OutputTheme} responseValue={resOutput} />  
            }
 
        </>
    )
}
export default Debugger