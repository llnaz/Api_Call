
import { Link } from 'react-router-dom';


import React , {useState, useEffect} from 'react'
import axios from 'axios';

const SearchPost = () => {

const [post,setPost]=  useState({})
const [id,setId] = useState(1)
const [idFromButtonClick, setIdFromButtonClick] = useState (1)

    useEffect (() => {
        axios
    .get(`  https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}/comments`)
    .then(res =>
    {
        console.log(res)
        setPost(res.data)

    })
    .catch(err =>{console.log(err)
    })

    },[id]
    )

const handleClick =() =>{

setIdFromButtonClick(idFromButtonClick) 


}

    return (


        <main className='text-center'>

            <h2>SearchPost</h2>



  <p style={{ marginTop: "1rem" }}>This API Call and search specific comment.</p>



<div>

<input type="text" value={id} onChange={e => setId(e.target.value)} />
<button type="button" onPress="{handleClick}" >FETCH ME </button>

<div> {post.postId}</div>

<div> {post.id}</div>

<div> {post.name}</div>





<div>  <h2>{post.name}</h2>{post.postId}</div>

</div>
        </main>

    )
}

export default SearchPost
