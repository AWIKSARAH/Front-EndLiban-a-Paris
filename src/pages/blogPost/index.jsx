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
      } catch (err) {
        console.log(err);
      }
    }
    getDataBlogPost();
  }, [id]);
  return (<>
    <article className="article">
      <div className="article__body">
    <section className="blog__header">
        <section className="text-block rich-text">
          <h2 className="header__title">{data.title} </h2>
          {data.tags?.map((tag,index)=>{
            return  <span key={index}className="blog__header__tag">{tag}</span>
          })}
       

          <p>{data.description}</p>
        </section>
          <img
            src={data?.image?.startsWith("http")?data.image:`http://localhost:5000${data.image}`}
            alt={data.title}
            width={600}
            height={500}
          />
        </section>

      </div>

    </article>
  </>
  );
}

export default BlogPost;
