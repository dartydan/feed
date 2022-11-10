import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GraphQLClient, gql } from 'graphql-request';
import BlogCard from "../components/BlogCard"

const graphcms = new GraphQLClient('https://api-us-east-1.hygraph.com/v2/clabf9a4f1fqj01ujb1yp40f2/master')

const QUERY = gql`
  {
    posts {
      publishedAt
      content
    }
  }
`;

export async function getStaticProps(){
  const {posts} = await graphcms.request(QUERY);
  return{
    props: {
      posts,
    }
    // revalidate: 10
  }
}

export default function Home({posts}) {



  return (
    <div className={styles.container}>



      <Head>
        <title>Feed</title>
        <meta name="description" content="Personal feed." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {posts.map((post) => (
          <BlogCard 
          datePublished={post.datePublished}
          content={post.content}/>
        ))}
      </main>
    </div>
  )
}
