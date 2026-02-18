type Props = {
  title: string;
  img: string;
  description: string;
};

export default function ProjectCard({ title, img, description }: Props) {
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={img} alt={title} />
      </div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}