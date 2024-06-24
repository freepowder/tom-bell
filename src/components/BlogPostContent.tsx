

const BlogPostContent = async (video) => {

  if (!video) return null;
  return (
    <div>
      <div className="mx-auto mb-10 lg:mt-20 break-words">
        <h1 className={'text-4xl font-bold'}>{video.title}</h1>
        <div className="aspect-[16/9] relative">
          <iframe className="w-full aspect-video block mx-auto rounded-md object-cover"
                  src={video.url}></iframe>
        </div>
      </div>
    </div>
  );
};

export default BlogPostContent
