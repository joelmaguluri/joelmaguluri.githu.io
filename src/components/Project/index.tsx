import { useEffect, useState } from "react"
import sanityClient from "../../utils/sanityclient"
import Link from "next/link";


function Project() {
    const [projectData, setProjectData] = useState(null);
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "project"]{
                    title,
                    date,
                    place,
                    description,
                    projectType,
                    link,
                    tags,
        }`
            )
            .then((data) => setProjectData(data))
            .catch(console.error)
    }, [])

    return (<main className="bg-steel-blue-100 min-h-screen p-12">
        <section className="container mx-auto">
            <h1 className="text-5xl flex justify-center cursive mb-3">My Projects</h1>
            <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                Welcome to my projects page!
            </h2>

            <section className="grid grid-cols-2 gap-8">
                {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-steel-blue-7001">
                            <Link
                                href={project.link}

                            >
                                {project.title}
                            </Link>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Place</strong>:{" "}
                                {project.place}
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                        </div>
                        <p className="my-6 text-lg text-gray-700 leading-relaxed">
                            {project.description}
                        </p>
                        <Link
                            href={project.link}

                        >
                            <p className="text-steel-blue-500 font-bold hover:underline hover:text-steel-blue-400">
                                View The Project{" "}
                                <span role="img" aria-label="right pointer">
                                    👉
                                </span>
                            </p>
                        </Link>
                    </article>
                ))}
            </section>
        </section>
    </main>)
}

export default Project;
