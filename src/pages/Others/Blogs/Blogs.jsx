import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='w-[80%] mx-auto py-14 lg:py-28'>

            <section className='w-full lg:w-[75%] mx-auto'>

                <h2 className='text-[#80311a] font-semibold text-xl'>Q1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className='mt-5 ts-paragraph'>
                    An access token is like a key that allows a user to access certain things or do specific tasks. It doesn't last very long. A refresh token is a special key that can be used to get a new access token when the old one expires. Refresh tokens need to be stored securely on the user's device, while access tokens are usually kept in local storage or a http only cookie. It's important to keep these tokens safe to protect user information and prevent unauthorized access.
                </p>

            </section>
            <section className='w-full lg:w-[75%] mx-auto my-12'>

                <h2 className='text-[#80311a] font-semibold text-xl'>Q2. Compare SQL and NoSQL databases?</h2>
                <p className='mt-5 ts-paragraph'>
                    SQL databases have a fixed structure and use SQL for querying. They are good for complex relationships and can handle vertical scalability. NoSQL databases have a flexible structure, use different query languages, and are great for handling large amounts of data. The choice depends on the specific needs of the application and data structure.
                </p>

            </section>
            <section className='w-full lg:w-[75%] mx-auto mb-12'>

                <h2 className='text-[#80311a] font-semibold text-xl'>Q3. What is express js and Next JS? </h2>
                <p className='mt-5 ts-paragraph'>
                    Express.js is a popular and lightweight web application framework for Node.js. It provides a set of features and tools to build web applications and APIs easily. Express.js simplifies the process of handling HTTP requests, routing, middleware integration, and more. It follows a minimalist approach, allowing developers to have flexibility and control over their application's architecture and components.<br></br><br></br>

                    Next.js, on the other hand, is a React framework for building server-rendered React applications. It is designed to make server-side rendering (SSR) and static site generation (SSG) seamless and straightforward. Next.js extends React by providing features like automatic code splitting, client-side routing, and optimized performance. It simplifies the development of React applications by offering built-in routing, server-side rendering capabilities, and a file-based routing system. Next.js also supports various data fetching strategies and allows developers to build full-stack applications with ease.
                </p>

            </section>
            <section className='w-full lg:w-[75%] mx-auto'>

                <h2 className='text-[#80311a] font-semibold text-xl'>Q4. What is MongoDB aggregate and how does it work? </h2>
                <p className='mt-5 ts-paragraph'>
                    In MongoDB, the aggregate method is used to perform advanced operations on data in a collection. It works by taking a series of steps, called stages, to process and analyze the data. Each stage performs a specific task, such as filtering, grouping, sorting, or transforming the data. The stages are executed in order, with the output of one stage becoming the input for the next stage. Finally, the aggregate method returns the processed data as the result. It is a powerful tool for querying and analyzing data in MongoDB collections, especially when dealing with complex operations or large datasets.
                </p>

            </section>
        </div>
    );
};

export default Blogs;