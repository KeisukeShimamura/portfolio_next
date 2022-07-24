import type { GetStaticProps } from 'next'
import Image from 'next/image'
import WorkCardList from '../components/WorkCardList'
import SkillBarList from '../components/SkillBarList'
import { client } from '../libs/client'
import type { Skill } from '../types/skill'
import type { Work } from '../types/work'

type IndexProps = {
  works: Work[];
  backendskills: Skill[];
  frontendskills: Skill[];
}

const IndexPage = (props: IndexProps) => {
  const { works, backendskills, frontendskills } = props
  return (
    <>
      <section id="about">
        <h2 className="font-fancy	text-center text-3xl">About</h2>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br />readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
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
  const works = await client.get({ endpoint: 'works', queries: {orders: 'publishedAt'} })
  const frontendskills = await client.get({ endpoint: 'skills', queries: {filters: 'private[equals]false[and]category[contains]フロントエンド', orders: '-score'}})
  const backendskills = await client.get({ endpoint: 'skills', queries: {filters: 'private[equals]false[and]category[contains]バックエンド', orders: '-score'}})
  return {
    props: {
      works: works.contents,
      backendskills: backendskills.contents,
      frontendskills: frontendskills.contents,
    }
  }
}
