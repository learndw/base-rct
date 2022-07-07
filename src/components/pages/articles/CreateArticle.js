import React, { useState } from 'react'
import ArticleService from "../../services/article.service";
import { useNavigate } from 'react-router-dom'

const CreateArticle = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault()
    const data = { "data": { title, description } };
    const response = await ArticleService.storeArticle(data);
    console.log(response.status);
    if (response.status === 200) {
      navigate('/news-and-advices')
    }
  }
  return (
    <div>
      <h3>Create Article</h3>
      <form onSubmit={store}>
        <div>
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type='text'
          />
        </div>
        <div>
          <label className='form-label'>Description</label>
          <textarea cols="30" rows="10" onChange={(e) => setDescription(e.target.value)}>{description}</textarea>
        </div>

        <button type='submit'>Guardar</button>
      </form>
    </div>
  )
}

export default CreateArticle