import { GetStaticProps, GetStaticPaths } from "next";
import type { Work } from "../../types/work";
import { client } from "../../libs/client";
import Image from "next/image";
import ImageSlider from "../../components/ImageSlider";
import WorkCardList from "../../components/WorkCardList";
import Section from "../../components/Section";

type WorkProps = {
  work: Work;
  otherWorks: Work[];
};

const WorkPage = (props: WorkProps) => {
  const { work, otherWorks } = props;

  return (
    <>
      <Section id="works">
        <div className="mb-4">
          <ImageSlider images={work.images} />
        </div>
        <h1 className="sm:text-4xl text-3xl mb-6 font-bold text-gray-900">
          {work.name}
        </h1>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: work.body_html }}
        ></div>
        {work.skill && (
          <div className="mb-6 text-left">
            {work.skill.map((s) => (
              <div className="mx-2 inline-block" key={s.id}>
                <Image src={s.icon.url} width={60} height={60} alt="skill" />
              </div>
            ))}
          </div>
        )}
      </Section>
      <Section id="other-works" title="Other Works">
        <WorkCardList works={otherWorks}></WorkCardList>
      </Section>
    </>
  );
};

export default WorkPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const works: Work[] = (await client.get({ endpoint: "works" })).contents;
  const paths = works.map((work) => ({
    params: { id: work.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const works = await client.get({
    endpoint: "works",
    queries: { filters: "id[equals]" + id },
  });
  const otherWorks = await client.get({
    endpoint: "works",
    queries: {
      filters: "id[not_equals]" + id,
      orders: "-publishedAt",
      limit: 3,
    },
  });
  return {
    props: {
      work: works.contents[0],
      otherWorks: otherWorks.contents,
    },
  };
};
