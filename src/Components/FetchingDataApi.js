import { useEffect, useState, Fragment } from "react";
import NewsDetails from "./NewsDetails";

const FetchingDataApi = (props) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchingNewsData(props.url);
  }, [props.url]);
  async function fetchingNewsData(url) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("fetching failed, Please try again later !!");
      }
      const data = await response.json();
      let newsData = [];
      for (const t in data.articles) {
        newsData.push({
          key: t,
          author: data.articles[t].author,
          title: data.articles[t].title,
          description: data.articles[t].description,
          url: data.articles[t].url,
          content: data.articles[t].content,
          publishTime: data.articles[t].publishedAt,
          image: data.articles[t].urlToImage,
        });
      }
      setNews(newsData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }
  let content = <p>HELLO</p>;
  if(isLoading){
      content = <h1>Loading</h1>
  }
  if(error && !isLoading){
      content = <h1>{error}</h1>
  }
  if(news.length>0){
      content = news.map((userNews)=>(
          <NewsDetails
          key = {userNews.key}
          author = {userNews.author}
          title = {userNews.title}
          description = {userNews.description}
          url = {userNews.url}
          content = {userNews.content}
          publishTime = {userNews.publishTime}
          image = {userNews.image}
          ></NewsDetails>
      ));
  }
  return <Fragment>{content}</Fragment>;
};

export default FetchingDataApi;
