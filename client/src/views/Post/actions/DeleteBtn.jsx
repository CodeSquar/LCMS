import { useContext } from "react"
import BlogContext, { BlogProvider } from "../../../providers/BlogProvider"
import Button from "../../../components/Button";
export default function DeleteBtn({index,closeInput}) {
    const {blogPost,setBlogPost} = useContext(BlogContext)
    const handleClick = () => {
        const updatedContent = [...blogPost.content]; // Clonar la matriz content existente
        updatedContent.splice(index,1);

        setBlogPost({
            ...blogPost,
            content: updatedContent // Actualizar el estado con la nueva matriz content
        });
        closeInput()
    };
    return(
        <Button className="py-4 px-8 rounded bg-red-500 text-white text-xs" onClick={handleClick}>Delete</Button>
    )
}