import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import articleService from "../../services/article.service";

const ShowArticle = () => {
  const [article, setArticle] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const getArticleById = async () => {
      try {
        const response = await articleService.getArticle(id)
        if (response.status === 200) {
          setArticle(response.data.data);
        }

        //setArticles(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getArticleById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(article);
  return (
    <div>

      <h1>{article?.attributes?.title}</h1>
      <p>{article?.attributes?.description}</p>

      <Link to='/news-and-advices' className='btn btn-primary'>Articles</Link>
    </div>
  )
}

export default ShowArticle