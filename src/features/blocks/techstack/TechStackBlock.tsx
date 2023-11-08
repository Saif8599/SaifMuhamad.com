import React from "react";

export interface TechStackItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface TechStackBlockProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  techStackItems: TechStackItem[];
}

const TechStackBlock = (props: TechStackBlockProps) => {
  const {
    title,
    description,
    techStackItems,
    className = "",
    ...restProps
  } = props;

  return (
    <div className={`${className}`} {...restProps}>
      <section className="px-4 md:p-12 ml-0 md:ml-10 pb-10" id="techstack">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <p className="text-lg font-mono mb-6">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStackItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              className="rounded-lg overflow-hidden shadow-md hover:bg-gray-600 shadow-red-600 transition duration-300 ease-in-out block"
            >
              <div className="flex items-center p-4 cursor-pointer">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                )}
                <div>
                  <h3 className="text-lg font-mono font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechStackBlock;
