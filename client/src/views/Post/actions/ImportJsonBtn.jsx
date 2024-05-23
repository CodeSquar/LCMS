import { useContext,useState } from "react";
import BlogContext from "../../../providers/BlogProvider";
import Button from "../../../components/Button";
export default function ImportJsonBtn(data) {
    const { blogPost, setBlogPost } = useContext(BlogContext);
    const [inputActive, setInputActive] = useState(false)
    const [importValue,setImportValue] = useState()
    
    const importJson = () => {
        try {
            const jsonImport = JSON.parse(importValue);
            setBlogPost(jsonImport);
            setInputActive(false); // Close the input after successful import
        } catch (error) {
            console.error('Invalid JSON:', error);
            alert('The input is not valid JSON. Please check your input and try again.');
        }
    };

    return (
        <>
            <Button onClick={()=>setInputActive(true)} className="bg-red-500 text-white">Import JSON</Button>
            {inputActive &&
            <div className="flex justify-center absolute bg-black bg-opacity-50 w-full h-full top-0 left-0 z-20">
                <div className="max-w-[500px] w-full">
                <textarea onChange={(e)=>setImportValue(e.target.value)} value={importValue} placeholder="Paste here your json" className="w-full p-4 rounded mt-4 h-[200px]"></textarea>
                <Button className="w-full bg-red-500 text-white mt-2" onClick={importJson}>Import</Button>
                <Button className="w-full bg-black text-white mt-2" onClick={()=>setInputActive(false)}>Cancel</Button>
                </div>
               
            </div>}
        </>

    )
}