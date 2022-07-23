import React from "react";
import Article from "./Article"


function ArticleList(props) {
    
    const articleArray = props.posts.map(post => {
        return <Article
            key={post.id}
            title={post.title}
            date={post.date}
            minutes={post.minutes}
            preview={post.preview}
        />
    })
    
    return (
        <main>{articleArray}</main>
    )
}



export default ArticleList;