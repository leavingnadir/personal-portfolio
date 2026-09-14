/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
const TechItem = ({ src, name }) => {
  return (
    <div className="group relative w-full h-36 mt-10 flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-midnight border border-white/5 hover:border-violet/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
      
      {/* Subtle background glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Tech Icon Container */}
      <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-indigo/50 rounded-xl p-2 border border-white/5 group-hover:border-violet/30 transition-colors">
        <img
          src={src}
          alt={name}
          className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all"
        />
      </div>

      {/* Tech Name */}
      <span className="relative z-10 text-xs font-mono text-neutral-300 group-hover:text-neon transition-colors tracking-wide">
        {name}
      </span>
    </div>
  );
};

const StackSection = ({ title, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-16 w-full">
      {/* Category Sub-heading */}
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-xl font-mono font-medium text-white tracking-wide">
          {title}
        </h3>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      {/* Grid Matrix */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-stretch">
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
      className="c-space mb-40 mx-auto max-w-[1280px] pt-36 px-4 md:px-8 flex flex-col items-center text-center relative"
      id="stack"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-violet uppercase tracking-widest text-xs font-mono block mb-3">
          // SYSTEM INFRASTRUCTURE & TOOLS
        </span>
        <h2 className="text-heading text-white mb-6">Tech Stack</h2>
        <p className="subtext text-neutral-400 max-w-2xl mx-auto">
          A comprehensive overview of the technologies, tools, and platforms I use to build scalable, secure, and high-performance applications.
        </p>
      </div>

      {/* Stack Categories */}
      <div className="w-full space-y-8">
        <StackSection
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
            { src: "/assets/logos/Spring_Boot.png", name: "Spring Boot" },
            { src: "/assets/logos/Redux.svg", name: "Redux" },
            { src: "/assets/logos/GraphQL.svg", name: "GraphQL" },
          ]}
        />

        <StackSection
          title="Databases"
          items={[
            { src: "/assets/logos/MySQL.svg", name: "MySQL" },
            { src: "/assets/logos/PostgresSQL.svg", name: "PostgreSQL" },
            { src: "/assets/logos/mongodb-icon.svg", name: "MongoDB" },
            { src: "/assets/logos/neon.svg", name: "Neon" },
          ]}
        />

        <StackSection
          title="Programming Languages"
          items={[
            { src: "/assets/logos/javascript.svg", name: "JavaScript" },
            { src: "/assets/logos/typescript-icon.svg", name: "TypeScript" },
            { src: "/assets/logos/java.svg", name: "Java" },
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
            { src: "/assets/logos/git.svg", name: "Git" },
            { src: "/assets/logos/Postman.svg", name: "Postman" },
            { src: "/assets/logos/kafkaw.png", name: "Kafka" },
            { src: "/assets/logos/RabbitMQ.svg", name: "RabbitMQ" },
            { src: "/assets/logos/SonarQube.svg", name: "SonarQube" },
            { src: "/assets/logos/ApacheMaven.svg", name: "Apache Maven" },
            { src: "/assets/logos/github-actions.svg", name: "GitHub Actions" },
          ]}
        />

        <StackSection
          title="CyberSec"
          items={[
            { src: "/assets/logos/nmap.png", name: "Nmap" },
            { src: "/assets/logos/Wireshark.png", name: "Wireshark" },
            { src: "/assets/logos/cisco-packet-tracer.png", name: "Cisco Packet Tracer" },
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
      </div>
    </section>
  );
}