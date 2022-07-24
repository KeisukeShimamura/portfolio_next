import type { GetStaticProps } from 'next'
import Image from 'next/image'
import WorkCardList from '../components/WorkCardList'
import SkillBarList from '../components/SkillBarList'
import { client } from '../libs/client'
import type { Skill } from '../types/skill'
import type { Work } from '../types/work'
import type { setting } from '../types/setting'

type IndexProps = {
  setting: setting
  works: Work[];
  backendskills: Skill[];
  frontendskills: Skill[];
}

const IndexPage = (props: IndexProps) => {
  const { setting, works, backendskills, frontendskills } = props
  return (
    <>
      <section id="about">
        <h2 className="font-fancy	text-center text-3xl">About</h2>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image src={setting.aboutImage.url} layout="responsive"
                  width={720}
                  height={600}
                  objectFit={"contain"}
                  alt="main" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {setting.aboutTitle}
            </h1>
            <div className="mb-8 leading-relaxed">
              {
                setting.aboutNote.split('\n').map((str, index) => (
                  <p key={index}>{str}<br /></p>
                ))
              }
            </div>
            <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <a className="text-indigo-400 ml-2" href={setting.github} target="_blank" rel="noreferrer">{setting.github}</a>
            </div>
          </div>
        </div>
      </section>
      <section id="works" className="bg-gray-100">
        <div className="container mx-auto px-5 py-24">
          <h2 className="font-fancy	text-center text-3xl">Works</h2>
          <WorkCardList works={works}></WorkCardList>
        </div>
      </section>
      <section id="skill">
      <div className="container mx-auto px-5 py-24">
        <h2 className="font-fancy	text-center text-3xl">My Skills</h2>
        <div className="flex flex-wrap mt-6">
          <SkillBarList skills={frontendskills} title="Frontend SKill" reverse={true} />
          <SkillBarList skills={backendskills} title="Backend SKill" />
        </div>
      </div>
      </section>
    </>
  )
}

export default IndexPage

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const setting = await client.get({ endpoint: 'setting' })
  const works = await client.get({ endpoint: 'works', queries: {orders: 'publishedAt'} })
  const frontendskills = await client.get({ endpoint: 'skills', queries: {filters: 'private[equals]false[and]category[contains]フロントエンド', orders: '-score'}})
  const backendskills = await client.get({ endpoint: 'skills', queries: {filters: 'private[equals]false[and]category[contains]バックエンド', orders: '-score'}})
  return {
    props: {
      setting: setting,
      works: works.contents,
      backendskills: backendskills.contents,
      frontendskills: frontendskills.contents,
    }
  }
}
