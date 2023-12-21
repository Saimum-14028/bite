import React from 'react';
import toast from 'react-hot-toast';

const Blog = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        // get field values 
        const comment = event.target.comment.value;
        console.log(comment);
        toast.success('Thanks for your comment');
    }

    return (
        <div className="antialiased my-5 text-justify">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm ">
                      <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos"></img>
                      <div>
                          <a href="#" rel="author" className="text-xl font-bold">Jese Leos</a>
                          <p className="text-base">Software Engineer</p>
                          <p className="text-base"><time dateTime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                      </div>
                  </div>
              </address>

                    <h2 className='font-bold lg:text-4xl md:text-3xl text-2xl'>1. What is One way data binding?</h2>
                    <div className='text-lg'>
                    <p className='my-5'>One-way data binding is a concept in software development and web programming where the data flow is unidirectional, moving in a single direction. In the context of user interfaces and frameworks like Angular or React, one-way data binding means that the data from the model (application state) is transferred to the view (UI components), but changes in the UI do not directly affect the model. In a one-way data binding scenario:</p>
                    <ol>
                        <li className='my-5'><strong>Model to View: </strong>Changes in the application's data (model) automatically update the corresponding elements in the user interface (view). For example, if a variable in the code changes, the associated UI element is automatically updated to reflect that change.
                        </li>
                        <li className='my-5'><strong>View does not affect Model: </strong>However, any changes made by the user in the UI do not affect the underlying data or model. The UI is a representation of the data, and it doesn't have the ability to modify the application state directly.</li>
                    </ol>

                    <p className='my-5'>One-way data binding simplifies the application architecture and makes it easier to manage and understand the flow of data. It can enhance performance as updates are more predictable. However, it also means that handling user input and interactions may require additional code or mechanisms to update the model accordingly.</p>
                    </div>

                    <h2 className='font-bold lg:text-4xl md:text-3xl text-2xl'>2. What is NPM in node.js?</h2>
                    <div className='text-lg'>
                    <p className='my-5'>NPM stands for Node Package Manager, and it is the default package manager for Node.js. NPM plays a crucial role in the Node.js ecosystem by allowing developers to easily manage and install external libraries (packages) that can be used in their Node.js applications.Here are some key points about NPM:</p>
                    <ol>
                        <li className='my-5'><strong>Package Management: </strong>NPM simplifies the process of installing, updating, and managing third-party libraries or packages in Node.js projects. These packages can include various functionalities, such as utility functions, frameworks, and tools.
                        </li>
                        <li className='my-5'><strong>Dependency Management: </strong>NPM automatically handles dependencies, which are the external libraries that a particular package relies on. When you install a package, NPM also installs its dependencies, ensuring that the application has all the necessary components to run.</li>
                        <li className='my-5'><strong>Command-Line Interface (CLI): </strong>NPM provides a command-line interface that allows developers to interact with the package manager. Common commands include npm install to install packages, npm start to run a project, and npm publish to share your own packages with the Node.js community.</li>
                        <li className='my-5'><strong>Package.json: </strong>Each Node.js project typically includes a package.json file, which serves as a manifest for the project. It contains metadata about the project, such as its name, version, dependencies, and scripts. NPM uses this file to understand the project's configuration and manage its dependencies.</li>
                        <li className='my-5'><strong>Registry: </strong>NPM maintains a public registry that hosts a vast collection of open-source Node.js packages. Developers can publish their packages to the registry, making them available for others to use.</li>
                    </ol>

                    <p className='my-5'>To install NPM, you typically need to install Node.js, as NPM is included with Node.js installations. Once installed, you can use the NPM commands to manage packages and dependencies in your Node.js projects.</p>
                    </div>

                    <h2 className='font-bold lg:text-4xl md:text-3xl text-2xl'>3. Difference between Mongodb database vs mySQL database</h2>
                    <div className='text-lg'>
                    <p className='my-5'>MongoDB and MySQL are both popular database management systems, but they belong to different categories and have some fundamental differences. Here are some key distinctions between MongoDB and MySQL:</p>
                    <ol>
                        <ol className='my-5'><strong>Data Model: </strong>
                        <li className='my-5'><strong>MongoDB: </strong>MongoDB is a NoSQL database, and it uses a document-oriented data model. It stores data in flexible, JSON-like BSON (Binary JSON) documents, allowing for a dynamic and schema-less structure. Collections (equivalent to tables in relational databases) store documents.</li>
                        <li className='my-5'><strong>MySQL: </strong>MySQL is a relational database management system (RDBMS), and it uses a structured, tabular data model. It organizes data into tables with predefined schemas, where each row represents a record, and each column represents a field.</li>
                        </ol>
                        <ol className='my-5'><strong>Schema: </strong>
                        <li className='my-5'><strong>MongoDB: </strong>MongoDB is schema-less, meaning that documents in a collection can have different fields. New fields can be added to documents without affecting other documents in the collection..</li>
                        <li className='my-5'><strong>MySQL: </strong>MySQL has a fixed schema, and changes to the schema (adding or removing columns) can impact the entire table. The schema must be defined in advance, and deviations require altering the table structure.</li>
                        </ol>
                        <ol className='my-5'><strong>Query Language: </strong>
                        <li className='my-5'><strong>MongoDB: </strong>MongoDB uses a query language that is similar to JSON. It supports a wide range of query operations, including filtering, sorting, and aggregation using the MongoDB Query Language (MQL).</li>
                        <li className='my-5'><strong>MySQL: </strong>MySQL uses Structured Query Language (SQL) for defining and manipulating the data. SQL provides a standardized way to interact with relational databases.</li>
                        </ol>
                        <ol className='my-5'><strong>Scaling: </strong>
                        <li className='my-5'><strong>MongoDB: </strong>MongoDB is designed to scale horizontally by sharding, which involves distributing data across multiple servers. This allows MongoDB to handle large amounts of data and high traffic volumes.</li>
                        <li className='my-5'><strong>MySQL: </strong>MySQL traditionally scales vertically by adding more resources (CPU, RAM) to a single server. While there are techniques for horizontal scaling (e.g., MySQL Cluster), it is often considered more challenging than with MongoDB.</li>
                        </ol>
                        <ol className='my-5'><strong>Use Cases: </strong>
                        <li className='my-5'><strong>MongoDB: </strong>MongoDB is well-suited for scenarios where flexibility, scalability, and fast development are essential. It's commonly used in applications with large and evolving datasets, such as content management systems, real-time big data applications, and mobile app backends.</li>
                        <li className='my-5'><strong>MySQL: </strong> MySQL is a good choice for applications with structured and relational data requirements, such as e-commerce platforms, financial applications, and traditional web applications.</li>
                        </ol>
                    </ol>

                    <p className='my-5'>Ultimately, the choice between MongoDB and MySQL depends on the specific requirements of your application, including the nature of your data, the need for scalability, and the development preferences of your team.</p>
                    </div>
                    
                    <section className="not-format">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg lg:text-2xl font-bold">Discussion (20)</h2>
                        </div>
                        <form onSubmit={handleSubmit} className="mb-6">
                            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                <label htmlFor="comment" className="sr-only">Your comment</label>
                                <textarea id="comment" name='comment' rows="6"
                                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                    placeholder="Write a comment..." required></textarea>
                            </div>
                            <button type="submit"
                                className="btn bg-blue-500">
                                Comment
                            </button>
                        </form>
                        <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                            <footer className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white"><img
                                            className="mr-2 w-6 h-6 rounded-full"
                                            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                            alt="Michael Gough"></img>Michael Gough</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400"><time  dateTime="2022-02-08"
                                            title="February 8th, 2022">Feb. 8, 2022</time></p>
                                </div>
                                <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    type="button">
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                        </svg>
                                    <span className="sr-only">Comment settings</span>
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownComment1"
                                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownMenuIconHorizontalButton">
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                        </li>
                                    </ul>
                                </div>
                            </footer>
                            <p className="text-gray-900 dark:text-white">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
                                instruments for the UX designers. The knowledge of the design tools are as important as the
                                creation of the design strategy.</p>
                            <div className="flex items-center mt-4 space-x-4">
                                <button type="button"
                                    className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400">
                                        <svg className="mr-1.5 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                        <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
                                        </svg>
                                    Reply
                                </button>
                            </div>
                        </article>
                        <article className="p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
                            <footer className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white"><img
                                            className="mr-2 w-6 h-6 rounded-full"
                                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                            alt="Jese Leos"></img>Jese Leos</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400"><time  dateTime="2022-02-12"
                                            title="February 12th, 2022">Feb. 12, 2022</time></p>
                                </div>
                                <button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2"
                                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    type="button">
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                        </svg>
                                    <span className="sr-only">Comment settings</span>
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownComment2"
                                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownMenuIconHorizontalButton">
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                        </li>
                                    </ul>
                                </div>
                            </footer>
                            <p className="text-gray-900 dark:text-white">Much appreciated! Glad you liked it ☺️</p>
                            <div className="flex items-center mt-4 space-x-4">
                                <button type="button"
                                    className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400">
                                        <svg className="mr-1.5 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                            <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
                                        </svg>
                                    Reply
                                </button>
                            </div>
                        </article>
                        <article className="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <footer className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white"><img
                                            className="mr-2 w-6 h-6 rounded-full"
                                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                            alt="Bonnie Green"></img>Bonnie Green</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400"><time  dateTime="2022-03-12"
                                            title="March 12th, 2022">Mar. 12, 2022</time></p>
                                </div>
                                <button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3"
                                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    type="button">
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                        </svg>
                                    <span className="sr-only">Comment settings</span>
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownComment3"
                                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownMenuIconHorizontalButton">
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                        </li>
                                    </ul>
                                </div>
                            </footer>
                            <p className="text-gray-900 dark:text-white">The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
                            <div className="flex items-center mt-4 space-x-4">
                                <button type="button"
                                    className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400">
                                    <svg className="mr-1.5 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                        <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
                                    </svg>
                                    Reply
                                </button>
                            </div>
                        </article>
                        <article className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <footer className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white"><img
                                            className="mr-2 w-6 h-6 rounded-full"
                                            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                            alt="Helene Engels"></img>Helene Engels</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400"><time  dateTime="2022-06-23"
                                            title="June 23rd, 2022">Jun. 23, 2022</time></p>
                                </div>
                                <button id="dropdownComment4Button" data-dropdown-toggle="dropdownComment4"
                                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    type="button">
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                        </svg>
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownComment4"
                                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownMenuIconHorizontalButton">
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                        </li>
                                    </ul>
                                </div>
                            </footer>
                            <p className="text-gray-900 dark:text-white">Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.</p>
                            <div className="flex items-center mt-4 space-x-4">
                                <button type="button"
                                    className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400">
                                    <svg className="mr-1.5 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                        <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
                                    </svg>
                                    Reply
                                </button>
                            </div>
                        </article>
                    </section>
                </article>
            </div>       
        </div>
    );
};

export default Blog;