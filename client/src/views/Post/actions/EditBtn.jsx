import { useContext } from "react";
import BlogContext from "../../../providers/BlogProvider";
import Button from "../../../components/Button";

export default function EditBtn({ index, type, variant, content, closeInput }) {
    const { blogPost, setBlogPost } = useContext(BlogContext)


    const handleClick = () => {
        const updatedContent = [...blogPost.content]; // Clonar la matriz content existente
        updatedContent[index] = { // Reemplazar el elemento en la posición especificada
            "type": type,
            "variant": variant,
            "content": content
        };

        setBlogPost({
            ...blogPost,
            content: updatedContent // Actualizar el estado con la nueva matriz content
        });
        closeInput()
    };

    return (
        <Button
            onClick={() => handleClick()}
            className="min-w-max bg-green-500 ">Edit content</Button>
    )
}
