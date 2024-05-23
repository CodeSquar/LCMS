import { useState } from "react"
import EditBtn from "../actions/EditBtn"
import DeleteBtn from "../actions/DeleteBtn"
import Button from "../../../components/Button"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

//develop components//
function VariantVisualizer({ variant }) {
    return (
        <span className="text-xs text-gray-500 ml-4">{variant}</span>
    )
}

//production componentes//
function EditContentInput({ index, content, variant, cancel }) {
    const [inputValue, setInputValue] = useState(content)
    const [newVariant, setNewVariant] = useState(variant)

    return (
        <div className="w-full edit-input">
            <div className="flex gap-1">
            <button onClick={() => setNewVariant("paragraph")} className={`text-xs rounded-full py-2 p-4 bg-neutral-100 ${newVariant === "paragraph" ? "border-black text-black" : "opacity-50"}`}>Paragraph</button>
            <button onClick={() => setNewVariant("heading")} className={`text-xs rounded-full py-2 p-4 bg-neutral-100 ${newVariant === "heading" ? "border-black text-black" : "opacity-50"}`}>Heading</button>
            <button onClick={() => setNewVariant("code")} className={`text-xs rounded-full py-2 p-4 bg-neutral-100 ${newVariant === "code" ? "border-black text-black" : "opacity-50"}`}>Code</button>
            </div>
          
            <textarea
                className={`${newVariant === "heading" ? "text-xl font-bold" : variant === "paragraph" && "text-black"} w-full mt-2 p-4 bg-green-100 border-green-500 outline-green-500 transition-all`}
                onChange={(e) => setInputValue(e.target.value)}
                autoFocus="true"
                wrap="soft"
                type="text"
                value={inputValue}></textarea>
            <div className="flex justify-between w-full mt-2">
                <div className="flex gap-2 ">
                    <EditBtn closeInput={cancel} index={index} type={"text"} variant={newVariant} content={inputValue} />
                    <Button onClick={cancel} className="bg-red min-w-max p-2 px-4 bg-black text-white  text-xs rounded">Cancel</Button>
                </div>
                <DeleteBtn closeInput={cancel} index={index} />
            </div>



        </div>
    )
}

function Image({ index, content, variant, active }) {
    const [editImageActive, setEditImageActive] = useState(false)
    const [newImageValue, setNewImageValue] = useState(content)
    const handleActiveInput = () => {
        setEditImageActive(!editImageActive)
    }
    return (
        <>
            <img
                onClick={() => setEditImageActive(!editImageActive)}
                className={`${variant === "big" ? "w-full" : variant === "small" && "w-1/2"} ${editImageActive && "outline-2 outline-red-500 p-8 hover:p-8"} rounded hover:opacity-50 bg-green-100 transition-all overflow-hidden`}
                src={content}></img>
            {editImageActive &&
                <div className="flex gap-2 mt-2">
                    <input className="bg-green-100 p-4 w-full outline-green-500" onChange={(e) => setNewImageValue(e.target.value)} value={newImageValue}></input>
                    <EditBtn index={index} type={"image"} variant={variant} content={newImageValue} closeInput={handleActiveInput} />
                    <DeleteBtn index={index} closeInput={handleActiveInput} />
                </div>

            }

        </>

    )
}

function Text({ index, content, variant }) {
    const [editContentActive, setEditContentActive] = useState(false)

    const handleClick = () => {
        setEditContentActive(!editContentActive)
    }

    return (
        editContentActive ?
            <EditContentInput index={index} cancel={handleClick} content={content} variant={variant} />
            :
            variant === "heading" ?
                <h2 onClick={handleClick} className="text-xl font-bold hover:opacity-50 transition-all">{content}<VariantVisualizer variant={variant} /></h2>
                : variant === "paragraph" ?
                    <p className="text-neutral-600 hover:opacity-50 transition-all" onClick={handleClick}>{content}<VariantVisualizer variant={variant} /></p>
                    : variant === "code" &&
                    <SyntaxHighlighter onClick={handleClick} language="javascript" style={github}>
                        {content}
                    </SyntaxHighlighter>
    )
}

export default function Content({ index, variant, type, content }) {
    return (
        type === "text" ?
            <Text index={index} variant={variant} content={content} />
            : type === "image" ?
                <Image index={index} content={content} variant={variant} />
                : null
    )
}