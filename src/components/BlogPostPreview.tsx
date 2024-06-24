"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FunctionComponent } from "react";

export const BlogPostPreview: FunctionComponent<{
  video:{url:string, title:string, slug:string,description:string}
}> = ({ video }) => {
  return (
    <div className="break-words">
      <Link href={`/video/${video.slug}`}>
        <div className="aspect-[16/9] relative">
          <iframe className="w-full aspect-video block mx-auto max-h-72 rounded-md object-cover"
                  src={video.url}></iframe>
        </div>
      </Link>
      <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
        <h2 className="font-sans font-semibold tracking-tighter text-primary text-2xl md:text-3xl">
          <Link href={`/video/${video?.slug}`}>{video?.title}</Link>
        </h2>
        <div className="prose lg:prose-lg italic tracking-tighter text-muted-foreground">
          {/*{formatDate(post.publishedAt || post.updatedAt, "dd MMMM yyyy")}*/}
        </div>
        <div className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4 text-muted-foreground">
          {video?.description}
        </div>
        <div className="text-sm text-muted-foreground">
          {/*{post.tags.map((tag) => (*/}
          {/*  <div key={tag.id} className="mr-2 inline-block">*/}
          {/*    <Link href={`/tag/${tag.name}`}>#{tag.name}</Link>*/}
          {/*  </div>*/}
          {/*))}*/}
        </div>
      </div>
    </div>
  );
};

export const BlogPostsPreview: FunctionComponent<{
  className?: string;
  videos:{url:string, title:string, slug:string,description:string}[]
}> = ({ className, videos }) => {
  return (
      <> <h1 className={'text-4xl font-bold my-10'}>Featured</h1>
      <div
      className={cn(
          "grid grid-cols-1 gap-16 lg:gap-28 md:grid-cols-2 md:my-16 my-8",
        className
      )}
    >
      {videos.map((video,i) => (
        <BlogPostPreview key={i} video={video}/>
      ))}
    </div>
      </>
  );
};
