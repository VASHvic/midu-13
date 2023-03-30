import React, { Suspense } from 'react'
import { ListOfPosts } from './ListOfPosts'

export default async function PostPage() {
  return (
    <section>
      <Suspense
        fallback={
          <p>CARGANDO DESDE SUSPENSE</p>
        }>
        <ListOfPosts />
      </Suspense>
    </section>
  )
}
