import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { notFound } from "next/navigation";
import {VIDEO, VIDEOS} from "@/lib/data";


interface Params {
  slug: string;
}

const Page = async ({ params: { slug } }: { params: Params }) => {
  const result = VIDEOS.find((v)=> v?.slug === slug);
  if (!result || !result.url) {
    return notFound();
  }
  return (
    <>
      <div className="container mx-auto px-5">
        <Header/>
        <div className=" mx-auto lg:mt-20 break-words">
        <h1 className={'text-4xl font-bold mb-10'}>{result.title}</h1>

        <div className="aspect-[16/9] relative">
          <iframe className="w-full aspect-video block mx-auto rounded-md object-cover"
                  src={result.url}></iframe>
        </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Page;
