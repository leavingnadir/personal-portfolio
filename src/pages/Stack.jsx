const TechItem = ({ src, name }) => {
  return (
    <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 rounded-2xl bg-[#0f1225] hover:bg-[#1a1f3c] transition-all duration-300 hover:scale-105 shadow-md text-center">
      <img
        src={src}
        alt={name}
        className="w-12 h-12 object-contain"
      />
      <span className="text-sm text-gray-300">{name}</span>
    </div>
  );
};

const StackSection = ({ title, items }) => {
  return (
    <div className="mt-20 flex flex-col items-center text-center w-full">
      <h3 className="text-xl md:text-2xl font-semibold mb-10 text-white">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        {items.map((tech) => (
          <TechItem key={tech.name} src={tech.src} name={tech.name} />
        ))}
      </div>
    </div>
  );
};

export default function Stack() {
  return (
    <section
      className="c-space mb-40 mx-auto max-w-[1280px] pt-24 flex flex-col items-center text-center"
      id="stack"
    >
      <h2 className="text-heading mb-6 mt-30">Tech Stack</h2>
      <p className="text-gray-400 max-w-2xl mb-24">
        A comprehensive overview of the technologies, tools, and platforms I use
        to build scalable, secure, and high-performance applications.
      </p>

      <StackSection className="items-center"
        title="Frontend"
        items={[
          { src: "/assets/logos/react.svg", name: "React.js" },
          { src: "/assets/logos/nextjs-icon.svg", name: "Next.js" },
          { src: "/assets/logos/tailwindcss.svg", name: "Tailwind CSS" },
          { src: "/assets/logos/greensock-icon.svg", name: "GSAP" },
          { src: "/assets/logos/react-router.svg", name: "React Router" },
          { src: "/assets/logos/three.png", name: "Three.js" },
          { src: "/assets/logos/Sass.svg", name: "SASS" },
          { src: "/assets/logos/angular-icon.svg", name: "Angular" },
        ]}
      />

      <StackSection
        title="Backend"
        items={[
          { src: "/assets/logos/nodejs-icon.svg", name: "Node.js" },
          { src: "/assets/logos/expressjs.svg", name: "Express" },
          { src: "/assets/logos/Redux.svg", name: "Redux" },
          { src: "/assets/logos/GraphQL.svg", name: "GraphQL" },
        ]}
      />

      <StackSection
        title="Databases"
        items={[
          { src: "/assets/logos/mongodb-icon.svg", name: "MongoDB" },
          { src: "/assets/logos/PostgresSQL.svg", name: "PostgreSQL" },
          { src: "/assets/logos/neon.svg", name: "Neon" },
        ]}
      />

      <StackSection
        title="Programming Languages"
        items={[
          { src: "/assets/logos/javascript.svg", name: "JavaScript" },
          { src: "/assets/logos/typescript-icon.svg", name: "TypeScript" },
          { src: "/assets/logos/java.svg", name: "Java" },
          { src: "/assets/logos/gopher.svg", name: "Go" },
          { src: "/assets/logos/Bash.svg", name: "Bash" },
          { src: "/assets/logos/Python.svg", name: "Python" },
        ]}
      />

      <StackSection
        title="DevOps & Cloud"
        items={[
          { src: "/assets/logos/Docker.svg", name: "Docker" },
          { src: "/assets/logos/Kubernetes.svg", name: "Kubernetes" },
          { src: "/assets/logos/Terraform.svg", name: "Terraform" },
          { src: "/assets/logos/Jenkins.svg", name: "Jenkins" },
          { src: "/assets/logos/Grafana.svg", name: "Grafana" },
          { src: "/assets/logos/Prometheus.svg", name: "Prometheus" },
          { src: "/assets/logos/git.svg", name: "Git" },
          { src: "/assets/logos/Postman.svg", name: "Postman" },
          { src: "/assets/logos/kafkaw.png", name: "Kafka" },
          { src: "/assets/logos/RabbitMQ.svg", name: "RabbitMQ" },
          { src: "/assets/logos/AWS.svg", name: "AWS" },
          { src: "/assets/logos/Azure.svg", name: "Azure" },
        ]}
      />

      <StackSection
        title="Libraries & Tools"
        items={[
          { src: "/assets/logos/react-query.svg", name: "React Query" },
          { src: "/assets/logos/Jest.svg", name: "Jest" },
          { src: "/assets/logos/faker.svg", name: "Faker" },
          { src: "/assets/logos/zustand.svg", name: "Zustand" },
          { src: "/assets/logos/better-auth.svg", name: "Better Auth" },
          { src: "/assets/logos/shadcn.svg", name: "Shadcn UI" },
          { src: "/assets/logos/Ubuntu.svg", name: "Ubuntu VM" },
        ]}
      />
    </section>
  );
}
