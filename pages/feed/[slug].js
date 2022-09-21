import styles from "../../styles/Feed.module.css";
import { useRouter } from "next/router";
import { Navbar } from "../../components/Navbar";

export const Feed = ({ pageNumber, articles }) => {
  const router = useRouter();
  console.log(articles, pageNumber);
  return (
    <div className="page-container">
        <Navbar />
      <div className={styles.main}>
        {articles.map((article, index) => (
          <div className={styles.post} key={index}>
            <h3
              onClick={() => {
                window.location.href = article.url;
              }}
            >
              {article.title}
            </h3>
            <p>{article.content}</p>
            {!!article.urlToImage && <img src={article.urlToImage} />}
          </div>
        ))}
      </div>
      <div className={styles.paginator}>
        <div
          onClick={() => {
            if (pageNumber > 1) {
              router.push(`/feed/${pageNumber - 1}`);
            }
          }}
          className={pageNumber === 1 ? styles.disabled : styles.active}
        >
          Previous Page
        </div>
        <div>Page : {pageNumber}</div>
        
          <div
            onClick={() => {
              if (pageNumber < 5) {
                router.push(`/feed/${pageNumber + 1}`);
              }
            }}
            className={pageNumber === 5 ? styles.disabled : styles.active}
          >
            Next Page
          </div>
        
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContent) => {
  const pageNumber = pageContent.query.slug;
  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }
  const apiResponse = await fetch(
    `https://newsapi.org/v2/everything?domains=wsj.com&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );
  const apiJson = await apiResponse.json();
  const { articles } = apiJson;

  return {
    props: {
      articles: articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;
