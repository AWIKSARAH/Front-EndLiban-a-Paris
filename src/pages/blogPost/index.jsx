import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../common/axios";
import "./blogPost.css";
function BlogPost() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getDataBlogPost() {
      try {
        const response = await get(`blog/${id}`);
        setData(response.data);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    getDataBlogPost();
  }, [id]);
  return (
    <article className="article">
      <div className="article__body">
        <section className="blog__header">
          <h1 className="header__title">{data.title} </h1>
        </section>

        <section className="text-block rich-text">
          {data.tags?.map(tag=>{
            return  <span className="blog__header__tag">{tag}</span>
          })}
       

          <p>{data.description}</p>
        </section>
      </div>

      <div className="article__image">
        <div className="article__image-wrapper">
          <img
            src={data?.image?.startsWith("http")?data.image:`http://localhost:5000${data.image}`}
            alt={data.title}
            preload as="image"
          />
        </div>
      </div>
    </article>
  );
}

export default BlogPost;
