import React, { useState, useEffect, useContext } from "react";
import Content from "./content/Content";
import BlogContext from "../../providers/BlogProvider";
import AddBtn from "./actions/AddBtn";
import Button from "../../components/Button";
import Title from "./content/TItle";
import ImportJsonBtn from "./actions/ImportJsonBtn";
import ExportCopyJsonBtn from "./actions/ExportCopyJsonBtn";


export default function Post(params) {
    const { blogPost, setBlogPost } = useContext(BlogContext);
    const [titleValue, setTitleValue] = useState(blogPost.title)
    const [editTitleActive, setEditTItleActive] = useState(false)
    return (
        <>
            <header className="flex border p-8 gap-4">
                <ImportJsonBtn />
                <ExportCopyJsonBtn data={blogPost} />

            </header>
            <div className="px-8 py-16 border-b border-l border-r">
            <Title>{blogPost.title}</Title>
           
                {blogPost?.content?.length > 0 ?
                    blogPost.content.map((content, index) => (
                        <>
                            <Content index={index} type={content.type} variant={content.variant} content={content.content} />
                            <AddBtn index={index} />
                        </>

                    )) :
                    <AddBtn index={0} />}
            </div>
          


        </>

    );
}
