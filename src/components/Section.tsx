interface Props {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

function Section({ id, title, description, children }: Props) {
  return (
    <section id={id} className="py-10 lg:py-20">
      <h2 className="text-center mb-4 text-3xl lg:text-5xl lg:leading-tight font-bold">
        {title}
      </h2>
      <p className="mb-12 text-center">{description}</p>
      {children}
    </section>
  );
}

export default Section;
