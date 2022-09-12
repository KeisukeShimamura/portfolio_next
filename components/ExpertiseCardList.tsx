import type { Expertise } from '../types/expertise'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faBrain } from '@fortawesome/free-solid-svg-icons'

type Props = {
  expertises: Expertise[]
}

const ExpertiseCardList = ({ expertises }: Props) => (
  <div className="flex flex-wrap mt-8 mx-auto -m-4">
    {
      expertises.map((expertise) => 
        <div key={expertise.id} className="px-0 py-4 md:px-3 md:w-1/4">
          <article className="h-full rounded-lg overflow-hidden flex flex-col bg-water p-4">
            { expertise.icon == "faMagnifyingGlass" && <FontAwesomeIcon icon={faMagnifyingGlass} className="p-2 text-indigo-500 bg-white w-8 h-8" />}
            { expertise.icon == "faCode" && <FontAwesomeIcon icon={faCode} className="p-2 text-indigo-500 bg-white w-8 h-8" />}
            { expertise.icon == "faDatabase" && <FontAwesomeIcon icon={faDatabase} className="p-2 text-indigo-500 bg-white w-8 h-8" />}
            { expertise.icon == "faBrain" && <FontAwesomeIcon icon={faBrain} className="p-2 text-indigo-500 bg-white w-8 h-8" />}
            <h3 className="text-md font-bold my-2">{expertise.name}</h3>
            <p className="leading-relaxed mb-2 text-xs line-clamp-5">{expertise.body}</p>
          </article>
        </div>
      )
    }
  </div>
)

export default ExpertiseCardList
