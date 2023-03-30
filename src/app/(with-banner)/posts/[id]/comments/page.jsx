import Image from 'next/image'

const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 2000))

  // throw new Error("Error al leer comentarios")
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  }).then(res => res.json())
}

export default async function Comments({ params }) {
  const { id } = params
  const comments = await fetchComments(id)
  return (
    <ul style={{ fontSize: '12px' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <Image src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} width={50} height={50} alt='algo' />
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>

  )
}
