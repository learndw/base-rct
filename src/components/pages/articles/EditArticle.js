
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArticleService from "../../services/article.service";

const EditArticle = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  const update = async (e) => {
    e.preventDefault()
    const data = { "data": { title, description } };

    const response = await ArticleService.updateArticle(id,data);
    if (response.status === 200) {
      navigate('/news-and-advices')
    }
  }

  useEffect(() => {
    const getArticleById = async () => {
      try {
        const response = await ArticleService.getArticle(id)
        if (response.status === 200) {
           const data= response.data.data.attributes;
           setTitle(data.title);
           setDescription(data.description);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getArticleById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
        <h3>Edit Product</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Title</label>
                <input 
                    value={title}
                    onChange={ (e)=> setTitle(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Description</label>
               
                <textarea cols="30" rows="10" onChange={ (e)=> setDescription(e.target.value)} value={description}></textarea>
            </div>
            <button type='submit' className='btn btn-primary'>Update Article</button>
        </form>
    </div>
  )
}

export default EditArticle