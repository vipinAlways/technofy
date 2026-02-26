import React from 'react'
import {data as blogPost} from "@/htmlString.json"

const Blog = () => {
  return (
    <div>
        <div dangerouslySetInnerHTML={{ __html: blogPost.content || "" }} className="prose lg:prose-xl w-full" />
    </div>
  )
}

export default Blog
