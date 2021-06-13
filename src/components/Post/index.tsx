import { useEffect, useState } from "react"
import sanityclient from "../../utils/sanityclient"
import Link from "next/link";

function Post() {
    const [postData, setPostData] = useState(null);
    useEffect(() => {
        sanityclient.fetch(`*[_type=="post"]{
          title,slug,mainImage{
              asset->{
                  _id,
                  url
              },
              alt
          }
      }`).then((data) => setPostData(data)).catch((error) => console.log(error))
    }, [])
    return (
        <main className="min-h-screen bg-green-100 pt-12">
            <section className="container mx-auto">
                <h1 className="text-5xl justify-center cursive flex">My Blogs</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                    Welcome to My Blog
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post, index) =>
                        <article>
                            <Link href={`/posts/${post.slug.current}`} >
                                <span className="block h-64 relative rounded shadow-sm leading-snug bg-white border-l-8 border-green-400 ">
                                    <img src={post.mainImage.asset.url} alt={post.mainImage.asset.alt} className="w-full h-full rounded-r object-cover absolute" />
                                    <span className="relative h-full flex justify-end items-end pr-4 pb-4">
                                        <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700  bg-opacity-75 rounded">
                                            {post.title}
                                        </h3>
                                    </span>
                                </span>
                            </Link>
                        </article>)
                    }
                </div>
            </section>
        </main>
    )
}

export default Post
