type Props = {
  id: string;
  title?: string;
  backgroundcolor?: string;
  children: any;
};

const Section = ({ id, title, backgroundcolor, children }: Props) => {
  return (
    <section id={id} className={`px-6 pt-24 ${backgroundcolor}`}>
      <h2 className="font-fancy	text-center text-3xl">{title}</h2>
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default Section;
