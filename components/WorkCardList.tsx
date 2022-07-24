import Link from 'next/link'
import type { Work } from '../types/work'

type Props = {
  works: Work[]
}

const WorkCardList = ({ works }: Props) => (
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {
        works.map((work) => 
          <div key={work.id} className="p-4 md:w-1/3">
            <Link href={`/work/${work.id}`}>
              <a>
                <article className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl bg-white">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={work.image.url} alt="blog" />
                  <div className="p-6">
                    <h3 className="title-font text-lg font-medium text-gray-900 mb-3">{work.name}</h3>
                    <p className="leading-relaxed mb-3 text-sm line-clamp-3">{work.body}</p>
                    <div className="my-1 flex flex-wrap">
                      {
                        work.skill.map((s) =>
                          <span key={s.id} className="text-xs m-1 bg-indigo-500 text-white rounded-md p-1">{s.name}</span>
                        )
                      }
                    </div>
                    <div className="flex items-center flex-wrap justify-center">
                      <span className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Read More
                      <svg className="w-4 h-4 ml-2 stroke-current stroke-2 fill-transparent" viewBox="0 0 24 24">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </Link>
          </div>
        )
      }
    </div>
  </div>
)

export default WorkCardList
