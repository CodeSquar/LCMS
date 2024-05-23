import { useContext, useState } from "react";
import BlogContext from "../../../providers/BlogProvider";
import Button from "../../../components/Button";
export default function AddBtn({ index }) {
    const { blogPost, setBlogPost } = useContext(BlogContext);
    const [inputActive, setInputActive] = useState(false)
    const [contentType, setContentType] = useState("text")
    const [contentVariant, setContentVariant] = useState("paragraph")
    const [content, setContent] = useState("")

    const handleClick = () => {
        const updatedContent = [...blogPost.content]; // Clonar la matriz content existente
        updatedContent.splice(index + 1, 0, { // Insertar el nuevo elemento después del índice especificado
            "type": contentType,
            "variant": contentVariant,
            "content": content
        });

        setBlogPost({
            ...blogPost,
            content: updatedContent // Actualizar el estado con la nueva matriz content
        });
        setInputActive(false)
    };
    const changeToText = (variant) => {
        setContentType("text")
        setContentVariant(variant)
    }
    const changeToImage = () => {
        setContentType("image")
        setContentVariant("big")
    }
    return (
        inputActive ?
            <div className="w-full add-input">
                <div className="w-full">
                    <div className="flex gap-1">
                        <button onClick={() => changeToText("paragraph")} className={`text-xs rounded-full py-2 p-4 bg-neutral-100 ${contentVariant === "paragraph" ? "border-black text-black" : "opacity-50"}`}>Paragraph</button>
                        <button onClick={() => changeToText("heading")} className={`text-xs rounded-full py-2 p-4 bg-neutral-100 ${contentVariant === "heading" ? "border-black text-black" : "opacity-50"}`}>Heading</button>
                        <button onClick={() => changeToText("code")} className={`text-xs rounded-full py-2 p-4 bg-neutral-100 ${contentVariant === "code" ? "border-black text-black" : "opacity-50"}`}>Code</button>
                        <button onClick={changeToImage} className={`text-xs rounded-full py-2 p-4 bg-neutral-100 ${contentType === "image" ? "border-black text-black" : "opacity-50"}`}>Image</button>
                    </div>

                    <textarea
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                        autoFocus="true"
                        placeholder={`${contentType === "image" ? "Put url image here" : "text here"}`}
                        className={`w-full mt-2 p-4 bg-green-100 border-green-500 outline-green-500 ${contentVariant === "heading" ? "text-xl font-bold" : contentVariant === "paragraph" ? "text-base" : contentVariant === "image" && "h-16"} transition-all`}>
                    </textarea>
                </div>


                <div className="flex gap-2 mt-2">
                    <Button className="bg-green-500 py-4 px-8 text-xs text-black rounded" onClick={handleClick}>Add</Button>
                    <Button className="bg-black py-4 px-8 text-xs text-white rounded" onClick={() => setInputActive(false)}>Cancel</Button>
                </div>

            </div>


            :
            <div className="w-full flex justify-center items-center  relative h-0 add-btn my-2  transition-all">
                <div className=" flex justify-center items-center h-6 absolute w-full top-0 bottom-0 my-auto mx-auto left-0 right-0 opacity-0 hover:opacity-100 transition-all">
                    <button
                        onClick={() => setInputActive(true)}
                        className="w-12 rounded-full aspect-square flex text-center justify-center items-center  bg-red text-white text-lg bg-green-500 hover:bg-black hover:opacity-100 active:scale-90 transition-all"
                    >
                        +
                    </button>
                    <div
                    style={{background: "rgb(190,190,190)",
                        background: "linear-gradient(90deg, rgba(190,190,190,0) 0%, rgba(190,190,190,1) 50%, rgba(190,190,190,0) 100%)"}}
                    className="bg-gradient-to-tr w-full h-[2px] absolute mx-auto left-0 right-0 -z-10"></div>
                </div>

            </div>


    );
}
