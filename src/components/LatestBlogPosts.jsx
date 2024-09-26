import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const LatestBlogPosts = () => {
  const blogPosts = [
    {
      title: "Blog Post Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.",
      webpImage: "/blog-image/blog-image-01.webp",
      fallbackImage: "/blog-image/blog-image-01.jpg",
      link: "#"
    },
    {
      title: "Blog Post Title 2",
      description:
        "Suspendisse potenti. Proin luctus, felis ac tincidunt fermentum, libero nisl gravida.",
      webpImage: "/blog-image/blog-image-02.webp",
      fallbackImage: "/blog-image/blog-image-02.jpg",
      link: "#"
    },
    {
      title: "Blog Post Title 3",
      description:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
      webpImage: "/blog-image/blog-image-03.webp",
      fallbackImage: "/blog-image/blog-image-03.jpg",
      link: "#"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest Blog Posts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            className="bg-white shadow-lg overflow-hidden"
          >
            {/* Responsive and lazy-loaded image */}
            <picture>
              <source srcSet={post.webpImage} type="image/webp" />
              <img
                src={post.fallbackImage}
                alt={post.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </picture>

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{post.description}</p>
              <div className="flex justify-end">
                <a
                  href={post.link}
                  className="text-black hover:text-gray-600 font-semibold flex items-center"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read more
                  <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LatestBlogPosts;
