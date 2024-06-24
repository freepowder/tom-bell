import {BlogPostsPreview} from "@/components/BlogPostPreview";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {HERO_VIDEO, VIDEOS} from "@/lib/data";
import Social from "@/components/ui/social";

const Page = async ({
                        searchParams,
                    }: {
    searchParams: { [key: string]: string | string[] | undefined };
}) => {
    return (
        <div className="container mx-auto px-5 mb-10">
            <Header/>
            <div className=" mx-auto lg:mt-20 break-words">
                <h1 className={'text-4xl font-bold mb-10'}>{HERO_VIDEO.title}</h1>

                <div className="aspect-[16/9] relative">
                    <iframe className="w-full aspect-video block mx-auto rounded-md object-cover"
                            src={HERO_VIDEO.url}></iframe>
                </div>
            </div>
            <BlogPostsPreview videos={VIDEOS}/>
            <Social/>
            <Footer/>
        </div>
    );
};

export default Page;
