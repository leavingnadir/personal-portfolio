import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TechItem from "./TechItem"

export default function AnimatedTabsDemo() {
  return (
    <section className="c-space mt-30 mb-30 grid content-center mx-auto max-w-[1280px]">
      <h2 className="text-heading mb-6">Tech Stack</h2>

      <Tabs defaultValue="frontend" className="w-full">
        {/* Tabs List */}
        <TabsList className="w-full grid grid-cols-3 md:grid-cols-6 text-4xl mt-4 rounded-full">
            <TabsTrigger
                value="frontend"
                className="bg-white text-black data-[state=active]:bg-blue-400 data-[state=active]:text-black rounded-full"
            >
                Frontend
            </TabsTrigger>
            <TabsTrigger
                value="backend"
                className="bg-white text-black data-[state=active]:bg-blue-400 data-[state=active]:text-black rounded-full"
            >
                Backend
            </TabsTrigger>
            <TabsTrigger
                value="database"
                className="bg-white text-black data-[state=active]:bg-blue-400 data-[state=active]:text-black rounded-full"
            >
                Database
            </TabsTrigger>
            <TabsTrigger
                value="languages"
                className="bg-white text-black data-[state=active]:bg-blue-400 data-[state=active]:text-black rounded-full"
            >
                Languages
            </TabsTrigger>
            <TabsTrigger
                value="DevOps"
                className="bg-white text-black data-[state=active]:bg-blue-400 data-[state=active]:text-black rounded-full"
            >
                DevOps & Cloud
            </TabsTrigger>
            <TabsTrigger
                value="tools"
                className="bg-white text-black data-[state=active]:bg-blue-400 data-[state=active]:text-black rounded-full"
            >
                Libs & Tools
            </TabsTrigger>
            </TabsList>

        <div className="mt-4 p-6">
          <TabsContent value="frontend" className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TechItem src="/assets/logos/react.svg" name="React.js" />
            <TechItem src="/assets/logos/nextjs-icon.svg" name="Next.js" />
            <TechItem src="/assets/logos/tailwindcss.svg" name="Tailwind CSS"/>
            <TechItem src="/assets/logos/greensock-icon.svg" name="GreenSock (GSAP)" />
            <TechItem src="/assets/logos/react-router.svg" name="React Router" />
            <TechItem src="/assets/logos/three.png" name="Three.js" />
            <TechItem src="/assets/logos/Sass.svg" name="SASS"/>
            <TechItem src="/assets/logos/angular-icon.svg" name="Angular"/>
          </TabsContent>

          <TabsContent value="backend" className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TechItem src="/assets/logos/nodejs-icon.svg" name="Node.js" />
            <TechItem src="/assets/logos/expressjs.svg" name="Express" />
            <TechItem src="/assets/logos/Redux.svg" name="Redux" />
            <TechItem src="/assets/logos/GraphQL.svg" name="GraphQL"/>
          </TabsContent>

          <TabsContent value="database" className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TechItem src="/assets/logos/mongodb-icon.svg" name="Mongo DB"/>
            <TechItem src="/assets/logos/PostgresSQL.svg" name="PostgresSQL"/>
            <TechItem src="/assets/logos/neon.svg" name="Neon"/>
          </TabsContent>

          <TabsContent value="languages" className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TechItem src="/assets/logos/javascript.svg" name="JavaScript" />
            <TechItem src="/assets/logos/typescript-icon.svg" name="TypeScript" />
            <TechItem src="/assets/logos/java.svg" name="JAVA" />
            <TechItem src="/assets/logos/gopher.svg" name="Golang" />
            <TechItem src="/assets/logos/csharp.svg" name="C#" />
            <TechItem src="/assets/logos/Bash.svg" name="Bash" />
          </TabsContent>

          <TabsContent value="DevOps" className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TechItem src="/assets/logos/Docker.svg" name="Docker"/>
            <TechItem src="/assets/logos/Kubernetes.svg" name="Kubernetes"/>
            <TechItem src="/assets/logos/Helm.svg" name="Helm"/>
            <TechItem src="/assets/logos/Terraform.svg" name="Terraform"/>
            <TechItem src="/assets/logos/Ansible.svg" name="Ansible"/>
            <TechItem src="/assets/logos/Pulumi.svg" name="Pulumi"/>
            <TechItem src="/assets/logos/Jenkins.svg" name="Jenkins"/>
            <TechItem src="/assets/logos/Grafana.svg" name="Grafana"/>
            <TechItem src="/assets/logos/Prometheus.svg" name="Prometheus"/>
            <TechItem src="/assets/logos/git.svg" name="Git"/>
            <TechItem src="/assets/logos/Postman.svg" name="Postman"/>
            <TechItem src="/assets/logos/Kafka.svg" name="Kafka"/>
            <TechItem src="/assets/logos/RabbitMQ.svg" name="RabbitMQ"/>
            <TechItem src="/assets/logos/AWS.svg" name="AWS"/>
          </TabsContent>

          <TabsContent value="tools" className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TechItem src="/assets/logos/react-query.svg" name="React Query"/>
            <TechItem src="/assets/logos/Jest.svg" name="Jest"/>
            <TechItem src="/assets/logos/faker.svg" name="Faker"/>
            <TechItem src="/assets/logos/zustand.svg" name="Zustand"/>
            <TechItem src="/assets/logos/better-auth.svg" name="Better Auth"/>
            <TechItem src="/assets/logos/shadcn.svg" name="ShadcnUI"/>
            <TechItem src="/assets/logos/puter.svg" name="Puter"/>
            <TechItem src="/assets/logos/Ubuntu.svg" name="Ubuntu VM"/>
            <TechItem src="/assets/logos/vercel.png" name="Vercel"/>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  )
}
