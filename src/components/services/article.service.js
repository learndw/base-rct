import axios from "axios";
import authHeader from "./auth-header";
import url from "./general";

const URL = url.articles;
const URL_ARTICLES_DESC = url.getArticlesDesc;

const getAllArticles = () => {
    return axios.get(URL_ARTICLES_DESC);
};

//axios.post(url[, data[, config]])
const storeArticle = (data) => {
    return axios.post(URL, data, { headers: authHeader() });
};
const updateArticle = (id, data) => {
    return axios.put(URL + id, data, { headers: authHeader() });
};
const getArticle = (id) => {
    return axios.get(URL + id);
};
const deleteArticle = (id) => {
    return axios.delete(URL + id,{ headers: authHeader() });
};

const ArticleService = {
    getAllArticles,
    storeArticle,
    getArticle,
    updateArticle,
    deleteArticle
};

export default ArticleService;