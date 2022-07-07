import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import articleService from "../../services/article.service";

const ShowArticles = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const response = await articleService.getAllArticles()

      setArticles(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteArticle = async (id) => {
    await articleService.deleteArticle(id);
    getArticles();
  }
  /* 
  <Route path='/edit/:id' element={<EditItem />}/>
<Route path='/item/:id' element={<ShowItem />}/>
  */

  useEffect(() => {
    getArticles()
  }, []);
  return (
    <div className='d-grid gap-2'>
      <Link to='/article/create' className='btn btn-success mt-2 mb-2'>Create</Link>
      <table className="table table-striped table-inverse table-responsive">
        <thead className="thead-inverse">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td>{article.attributes.title}</td>
              <td>{article.attributes.description}</td>
              <td>
                <Link to={`/article/${article.id}/edit`} className='btn btn-warning'>Editar</Link>
                <Link to={`/article/${article.id}`} className='btn btn-primary'>Ver</Link>
                <button onClick={() => deleteArticle(article.id)} className='btn btn-danger'>Eliminar</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShowArticles