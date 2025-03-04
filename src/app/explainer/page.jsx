"use client"
import { useState } from "react";
import Button from "../../components/Button";
import InputEditor from "../../components/InputEditor";
import OutputEditor from "../../components/OutputEditor";
import { InputTheme, OutputTheme } from "@/constants";
import axios from "axios";

const Explainer = () =>
{
    const [editorLang, setEditorLang] = useState('javascript')
    const [loading, setLoading] = useState(false)
    const [resOutput, setResOutput] = useState('')
    const [error, setError] = useState('')
    const [value, setValue] = useState('')
    const explainerHandler = async () =>
    {
        console.log(value);
        if (value == 'Enter Code' || !value)
        {
             
            return setError('Code is Required !');
        }
        try
        {
            setError('')
            setLoading(true)
            console.log(value,);
            const response = await axios.post('/api/explain', { value }).then((res) =>
            {
                console.log(res);
                setResOutput(res.data?.explanation)
                setLoading(false)
            })
        } catch (error)
        {
            console.log(error);
        }
    }
    console.log(!resOutput);
    return (
        <>
            <InputEditor setEditorLang={setEditorLang} setValue={setValue} myTheme={InputTheme} />
        
            <Button handler={explainerHandler} btnName={loading ? 'Loading' : 'Explain'} />
            <p className="text-red-500" >
                {error}
            </p>
            {
                 loading && !resOutput?<></>: <OutputEditor editorLang={editorLang} myTheme={OutputTheme} responseValue={resOutput} />  
            }
        </>
    )
}
export default Explainer