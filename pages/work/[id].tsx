import { GetStaticProps, GetStaticPaths } from 'next'
import type { Work } from '../../types/work'
import { client } from '../../libs/client'
import Image from 'next/image'
import ImageSlider from '../../components/ImageSlider'

type WorkProps = {
  work: Work
}

const WorkPage = (props: WorkProps) => {
  const { work } = props
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">{work.name}</h1>
            <div className="mb-4 text-left">
              {
                work.body.split('\n').map((str, index) => (
                  <p key={index}>{str}<br /></p>
                ))
              }
            </div>
            {(() => {
              if (work.url) {
                return (
                  <div className="mb-4">
                    <h2 className="font-bold text-xl">URL</h2>
                    <a className="text-indigo-400" href={work.url} target="_blank">{work.url}</a>
                  </div>
                )
              }
            })()}
            <div className="mb-4">
              <h2 className="font-bold text-xl">使用技術</h2>
              <div className="flex flex-wrap">
                {
                  work.skill.map((s) =>
                    <div key={s.id} className="mx-2">
                      <Image src={s.icon.url} width={60} height={60}/>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
            <ImageSlider images={work.images} />
          </div>
        </div>
      </section>
    </>
  )
}

export default WorkPage

export const getStaticPaths: GetStaticPaths = async () => {
  const works: Work[] = (await client.get({ endpoint: 'works' })).contents
  const paths = works.map((work) => ({
    params: { id: work.id.toString() }
  }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id
  const works = await client.get({ endpoint: 'works', queries: {filters: 'id[equals]' + id} })
  return {
    props: {
      work: works.contents[0]
    }
  }
}