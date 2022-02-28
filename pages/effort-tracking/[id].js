import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllEffortIds, getEffortData } from '../../lib/effort-tracking'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
  const effortData = await getEffortData(params.id)
  return {
    props: {
      effortData
    }
  }
}

export async function getStaticPaths() {
    const paths = getAllEffortIds()
    return {
      paths,
      fallback: false
    }
}


export default function Question({ effortData }) {
    return (
      <Layout>
        <Head>
          <title>{effortData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{effortData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={effortData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: effortData.contentHtml }} />
        </article>
      </Layout>
    )
  }