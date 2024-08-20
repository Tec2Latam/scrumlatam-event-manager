import CardLink from "@/components/CardLink";
import HeaderLabel from "@/components/HeaderLabel";
import NextLogoSection from "@/components/NextLogoSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <HeaderLabel />

      <NextLogoSection />

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        
        <CardLink 
          title="Documentation" 
          content="Find in-depth information about Next.js features and API."
          url="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        />

        <CardLink 
          title="Learn 02" 
          content="Learn about Next.js in an interactive course with&nbsp;quizzes!"
          url="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        />
        
      </div>
    </main>
  );
}
