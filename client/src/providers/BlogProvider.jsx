// BlogContext.js
import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const BlogContext = createContext();

// Crear el proveedor del contexto
export const BlogProvider = ({ children }) => {
    const [blogPost, setBlogPost] = useState({
        "title": "Title",
        "content": [
            {
                "type": "text",
                "variant": "heading",
                "content": "This is a heading, edit this or add something below"
            }
        ]
    });

    return (
        <BlogContext.Provider value={{ blogPost, setBlogPost }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;
