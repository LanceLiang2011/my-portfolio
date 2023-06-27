import Image from "next/image";

interface Props {
  src: any;
  alt: string;
  title: string;
  paragraph: string;
  button?: string;
  href?: string;
  skills: string[];
  shadow?: boolean;
}

export const ImageCard = ({
  src,
  alt,
  title,
  paragraph,
  button = "Visit",
  href = "",
  skills,
  shadow = true,
}: Props) => {
  if (shadow)
    return (
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <Image src={src} alt={alt} />
        </figure>
        <div className="card-body">
          <h4 className="card-title text-gray-50">{title}</h4>
          <div className="flex gap-2">
            {skills &&
              skills.map((skill) => (
                <div key={skill} className={`badge badge-blue`}>
                  {skill}
                </div>
              ))}
          </div>
          <h5 className="text-gray-50">{paragraph}</h5>
          <div className="card-actions justify-end">
            <a href={href} target="_blank">
              <button className="btn btn-primary text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {button}
              </button>
            </a>
          </div>
        </div>
      </div>
    );

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <Image src={src} alt={alt} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <div className="flex gap-2">
          {skills &&
            skills.map((skill) => (
              <div key={skill} className={`badge badge-outline`}>
                {skill}
              </div>
            ))}
        </div>
        <p>{paragraph}</p>
        <div className="card-actions">
          <button className="btn btn-primary">{button}</button>
        </div>
      </div>
    </div>
  );
};
