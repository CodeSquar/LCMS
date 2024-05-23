import { useState } from "react"
import Button from "../../../components/Button"
import { useContext } from "react"
import BlogContext from "../../../providers/BlogProvider"

export default function Title({ children }) {
    const { blogPost, setBlogPost } = useContext(BlogContext)
    const [inputActive, setInputActive] = useState(false)
    const [titleValue, setTitleValue] = useState(children)
    const handleChangeTitle = () => {
        setBlogPost({
            ...blogPost,
            title: titleValue

        })
        setInputActive(false)
    }
    return (
        <>
            {inputActive ?
                <div className="my-8">
                    <input autoFocus="true" className="p-4 border-green-500 outline-green-500 rounded bg-green-100 w-full text-3xl font-black" onChange={(e) => setTitleValue(e.target.value)} value={titleValue}></input>
                    <div className="flex gap-2 mt-2">
                        <Button className="bg-green-500 text-black" onClick={handleChangeTitle}>Edit title</Button>
                        <Button className="bg-black text-white" onClick={() => setInputActive(false)}>Cancel</Button>
                    </div>

                </div>

                : <h1 onClick={() => setInputActive(true)} className="text-3xl font-black  hover:opacity-50 transition-all">{children}</h1>}
        </>

    )
}