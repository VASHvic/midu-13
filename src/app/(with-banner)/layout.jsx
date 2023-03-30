'use client'
import { Counter } from "./posts/Counter";

function PostsLayout({ children }) {
  return (
    <div>
      <marquee >
        <small>Home &bull; Posts</small>
      </marquee>

      {children}
    </div>
  )
}

export default PostsLayout;
