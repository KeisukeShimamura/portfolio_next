import type { Skill } from '../types/skill'

type Props = {
  skills: Skill[]
  title: string
  reverse?: Boolean
}

const SkillBarList = ({ skills, title, reverse=false }: Props) => (
  <div className="md:w-1/2 w-full md:pl-2">
    <h3 className="text-center font-medium mb-2">{title}</h3>
    <div className="flex flex-col">
      {
        skills.map((skill) => 
          <div className="relative h-10 bg-gray-100 mb-6 rounded">
            <div className={`animate-graph${skill.score} h-10 absolute ${reverse ? 'right-0 flex-row-reverse' : 'left-0'} top-0 bottom-0 m-auto bg-indigo-500 flex items-center justify-between md:px-6 px-2 rounded`}>
              <span className="text-white md:text-base text-sm">{skill.name}</span>
              <span className="text-white md:text-base text-sm">{skill.score}</span>
            </div>
          </div>
        )
      }
    </div>
  </div>
)

export default SkillBarList
