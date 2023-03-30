'use client'
import React, { useState } from 'react'

export default function LikeButton() {
  const [liked, setLiked] = useState(false)

  function handleClick() {
    setLiked(!liked)
  }
  return (
    <button onClick={handleClick}>{liked ? '❤' : '💔'}</button>
  )
}
