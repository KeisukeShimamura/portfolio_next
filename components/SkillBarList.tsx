import type { Skill } from "../types/skill";
import { useInView } from "react-intersection-observer";

type Props = {
  skills: Skill[];
  title: string;
  reverse?: Boolean;
};

const SkillBarList = ({ skills, title, reverse = false }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <div className="md:w-1/2 w-full md:pl-2 my-6">
      <h3 className="text-center font-medium mb-2">{title}</h3>
      <div className="flex flex-col">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="relative h-10 bg-gray-100 mb-6 rounded"
          >
            <div
              ref={ref}
              className={`${
                inView ? `animate-graph${skill.score}` : ""
              } h-10 absolute ${
                reverse
                  ? "md:right-0 md:left-auto right-auto left-0 md:flex-row-reverse flex-row"
                  : "left-0"
              } top-0 bottom-0 m-auto bg-indigo-500 flex items-center justify-between md:px-6 px-2 rounded`}
            >
              <span className="text-white md:text-base text-sm">
                {skill.name}
              </span>
              <span className="text-white md:text-base text-sm">
                {skill.score}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="animate-graph50 hidden"></div>
      <div className="animate-graph60 hidden"></div>
      <div className="animate-graph70 hidden"></div>
      <div className="animate-graph80 hidden"></div>
      <div className="animate-graph90 hidden"></div>
      <div className="animate-graph100 hidden"></div>
    </div>
  );
};

export default SkillBarList;
