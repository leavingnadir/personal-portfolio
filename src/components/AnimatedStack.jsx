import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TechItem from "./TechItem"

export default function AnimatedTabsDemo() {
  return (
    <section className="c-space mt-30 mb-30 grid content-center mx-auto max-w-[1280px]">
      <h2 className="text-heading mb-6">Tech Stack</h2>

      <Tabs defaultValue="frontend" className="w-full">
        {/* Tabs List */}
        <TabsList className="w-full grid grid-cols-3 md:grid-cols-6 text-4xl mt-4">
            <TabsTrigger
                value="frontend"
                className="bg-white text-black data-[state=active]:bg-purple-500 data-[state=active]:text-black"
            >
                Frontend
            </TabsTrigger>
            <TabsTrigger
                value="backend"
                className="bg-white text-black data-[state=active]:bg-purple-500 data-[state=active]:text-black"
            >
                Backend
            </TabsTrigger>
            <TabsTrigger
                value="database"
                className="bg-white text-black data-[state=active]:bg-purple-500 data-[state=active]:text-black"
            >
                Database
            </TabsTrigger>
            <TabsTrigger
                value="languages"
                className="bg-white text-black data-[state=active]:bg-purple-500 data-[state=active]:text-black"
            >
                Languages
            </TabsTrigger>
            <TabsTrigger
                value="libs"
                className="bg-white text-black data-[state=active]:bg-purple-500 data-[state=active]:text-black"
            >
                Libs/Tech
            </TabsTrigger>
            <TabsTrigger
                value="tools"
                className="bg-white text-black data-[state=active]:bg-purple-500 data-[state=active]:text-black"
            >
                Tools
            </TabsTrigger>
            </TabsList>

        {/* Tabs Content */}
        <div className="mt-4 p-6">
          <TabsContent value="frontend" className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TechItem src="/assets/logos/react.svg" name="React.js" />
            <TechItem src="/assets/logos/nextjs-icon.svg" name="Next.js" />
            <TechItem src="/assets/logos/tailwindcss.svg" name="Tailwind CSS"/>
            <TechItem src="/assets/logos/greensock-icon.svg" name="GreenSock (GSAP)" />
            <TechItem src="/assets/logos/react-router.svg" name="React Router" />
            <TechItem src="/assets/logos/three.png" name="Three.js" />
            <TechItem src="/assets/logos/Sass.svg" name="SASS"/>
          </TabsContent>

          <TabsContent value="backend" className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TechItem src="/assets/logos/nodejs-icon.svg" name="Node.js" />
            <TechItem src="/assets/logos/nestjs.svg" name="Nest.js" />
            <TechItem src="/assets/logos/Redux.svg" name="Redux" />
            <TechItem src="/assets/logos/GraphQL.svg" name="GraphQL"/>
          </TabsContent>

          <TabsContent value="database" className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TechItem src="/assets/logos/mongodb-icon.svg" name="Mongo DB"/>
            <TechItem src="/assets/logos/Sanity.svg" name="Sanity"/>
          </TabsContent>

          <TabsContent value="languages" className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TechItem src="/assets/logos/javascript.svg" name="JavaScript" />
            <TechItem src="/assets/logos/typescript-icon.svg" name="TypeScript" />
            <TechItem src="/assets/logos/java.svg" name="JAVA" />
            <TechItem src="/assets/logos/solidity.svg" name="Solidity" />
          </TabsContent>

          <TabsContent value="libs" className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TechItem src="/assets/logos/zustand.svg" name="Zustand"/>
            <TechItem src="/assets/logos/better-auth.svg" name="Better Auth"/>
            <TechItem src="/assets/logos/shadcn.svg" name="ShadcnUI"/>
            <TechItem src="/assets/logos/aceternity.svg" name="Aceternity"/>
            <TechItem src="/assets/logos/starton.svg" name="Starton"/>
            <TechItem src="/assets/logos/puter.svg" name="Puter"/>
            <TechItem src="/assets/logos/radix.svg" name="Radix"/>
          </TabsContent>

          <TabsContent value="tools" className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TechItem src="/assets/logos/visualstudiocode.svg" name="VS Code"/>
            <TechItem src="/assets/logos/ESLint.svg" name="ESLint"/>
            <TechItem src="/assets/logos/Jest.svg" name="Jest"/>
            <TechItem src="/assets/logos/vercel.png" name="Vercel"/>
            <TechItem src="/assets/logos/git.svg" name="Git"/>
            <TechItem src="/assets/logos/github2.svg" name="Github"/>
            <TechItem src="/assets/logos/vitejs.svg" name="ViteJS"/>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  )
}
