import type { GetStaticProps } from "next";
import Image from "next/image";
import Section from "../components/Section";
import WorkCardList from "../components/WorkCardList";
import SkillBarList from "../components/SkillBarList";
import ExpertiseCardList from "../components/ExpertiseCardList";
import Contact from "../components/Contact";
import { client } from "../libs/client";
import { Expertise } from "../types/expertise";
import type { Skill } from "../types/skill";
import type { Work } from "../types/work";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

type IndexProps = {
  expertises: Expertise[];
  works: Work[];
  backendskills: Skill[];
  frontendskills: Skill[];
};

const IndexPage = (props: IndexProps) => {
  const { expertises, works, backendskills, frontendskills } = props;

  return (
    <>
      <Section id="about" title="About" backgroundcolor="mt-12">
        <div className="flex md:flex-row flex-col items-center mt-8">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 h-96 relative">
            <Image src="/main_image.png" layout="fill" objectFit="contain" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="flex flex-col mb-8 text-left">
              <p>
                はじめまして！私のポートフォリオサイトへようこそ！
                <br />
                岡山県出身で現在北海道札幌市を拠点に生活しております。
                <br />
                大学卒業後に新卒で入職した会社より約10年間ほどIT業界にて、日々過ごしております。
              </p>
              <ul className="mt-4">
                <li className="mt-2">
                  <span className="text-indigo-500 font-bold">
                    <FontAwesomeIcon icon={faSquareCheck} className="w-4 h-4" />
                    <span className="ml-2">2013年4月〜2018年10月</span>
                  </span>
                  <br />
                  <span className="text-sm">
                    SIerに就職し、業務システムやWebなど色んな言語・環境のプロジェクトを従事
                  </span>
                </li>
                <li className="mt-2">
                  <span className="text-indigo-500 font-bold">
                    <FontAwesomeIcon icon={faSquareCheck} className="w-4 h-4" />
                    <span className="ml-2">2018年11月〜2022年10月</span>
                  </span>
                  <br />
                  <span className="text-sm">
                    人材業界のベンチャー企業に転職。自社サービスの保守や新規サービスの開発をメインに業務を遂行
                  </span>
                </li>
                <li className="mt-2">
                  <span className="text-indigo-500 font-bold">
                    <FontAwesomeIcon icon={faSquareCheck} className="w-4 h-4" />
                    <span className="ml-2">2022年11月〜（予定）</span>
                  </span>
                  <br />
                  <span className="text-sm">フリーランスとして独立予定</span>
                </li>
              </ul>
              <div className="flex justify-start mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <a
                  className="text-indigo-400 ml-2"
                  href="https://github.com/KeisukeShimamura"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/KeisukeShimamura
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section id="expertises" title="My Expertise">
        <ExpertiseCardList expertises={expertises} />
      </Section>
      <Section id="works" title="Works">
        <WorkCardList works={works} />
      </Section>
      <Section id="skill" title="My Skills">
        <div className="flex flex-wrap mt-6">
          <SkillBarList
            skills={frontendskills}
            title="Frontend SKill"
            reverse={true}
          />
          <SkillBarList skills={backendskills} title="Backend SKill" />
        </div>
      </Section>
      <Section id="contact" title="Contact">
        <Contact />
      </Section>
    </>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const expertises = await client.get({
    endpoint: "expertises",
    queries: { orders: "publishedAt" },
  });
  const works = await client.get({
    endpoint: "works",
    queries: { orders: "publishedAt" },
  });
  const frontendskills = await client.get({
    endpoint: "skills",
    queries: {
      filters: "private[equals]false[and]category[contains]フロントエンド",
      orders: "-score",
    },
  });
  const backendskills = await client.get({
    endpoint: "skills",
    queries: {
      filters: "private[equals]false[and]category[contains]バックエンド",
      orders: "-score",
    },
  });
  return {
    props: {
      expertises: expertises.contents,
      works: works.contents,
      backendskills: backendskills.contents,
      frontendskills: frontendskills.contents,
    },
  };
};
