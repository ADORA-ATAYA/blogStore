import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { GrView, GrBookmark } from "react-icons/gr";
import { IoIosShareAlt } from "react-icons/io";

const BlogPage = () => {
  const blog = {
    _id: "2585",
    title: "Experience of Creating Apps with React",
    thumbnail: "/images/boyhome.png",
    thumbnail_description: "boy home",
    likes: ["4fa4sd64fa4a45asf", "4fa4sd65f5fa45asf"],
    views: [
      "4fa4sd64fa4a45asf4sd64f",
      "4fa4sd65f5fa4fa12a4sd65",
      "4fa4sa4sd65d65f5fa45asf",
      "41ff2d65f5fa4sd65a45asf",
    ],
    table_of_content: [
      "Introduction",
      "Getting Started with React",
      "The Learning Curve",
      "Building My First React App",
      "Styling with CSS and Libraries",
      "State Management with Redux",
      "Embracing Functional Components and Hooks",
      "Dealing with Real-world Challenges",
      "Collaborating and Continuous Learning",
      "Conclusion",
    ],
    content: [
      {
        heading: "Introduction",
        body: [
          "In the world of web development, React has emerged as a powerhouse for building user interfaces and web applications. Over the past few years, my journey with React has been nothing short of exhilarating. In this blog post, I'll share my experience of creating apps with React and the valuable lessons I've learned along the way.",
        ],
      },
      {
        heading: "Getting Started with React",
        body: [
          "My journey with React began with a simple curiosity. I had heard so much about its flexibility and efficiency in building user interfaces, and I was eager to dive in. The first step was to set up my development environment, and I chose Create React App for its simplicity and convenience. Within minutes, I had a basic React application up and running.",
        ],
      },
      {
        heading: "The Learning Curve",
        body: [
          "As with any new technology, there was a learning curve. React's component-based architecture was both intriguing and challenging. However, the abundance of online resources, tutorials, and a supportive developer community made the process enjoyable. I found myself continuously improving my understanding of React components, state management, and the virtual DOM.",
        ],
      },
      {
        heading: "Building My First React App",
        image: "/images/boyhome.png",
        image_description: "boy home",
        body: [
          "With the basics in place, it was time to tackle my first real project. I decided to build a simple to-do list application. This project allowed me to put my newfound knowledge into practice. I created reusable components for the list, individual tasks, and an input form. Managing the state of the tasks and handling user interactions was a significant learning experience.",
        ],
      },
      {
        heading: "Styling with CSS and Libraries",
        body: [
          "While React provides an excellent framework for building UI components, I quickly realized that CSS alone wouldn't suffice for creating a polished app. That's when I integrated popular styling libraries like styled-components and Material-UI into my project. These libraries simplified the styling process, and my app started to look more professional.",
        ],
      },
      {
        heading: "State Management with Redux",
        body: [
          "As my projects grew in complexity, managing state across different components became challenging. I turned to Redux, a state management library, to streamline this process. Implementing Redux involved understanding actions, reducers, and the overall data flow, but the benefits of centralized state management were well worth the effort.",
        ],
      },
      {
        heading: "Embracing Functional Components and Hooks",
        body: [
          "React's evolution introduced functional components and hooks, changing the way developers approached component lifecycle and state management. The transition from class-based components to functional components with hooks was a significant shift in my React journey. It allowed me to write cleaner and more concise code.",
        ],
      },
      {
        heading: "Dealing with Real-world Challenges",
        body: [
          "During my journey, I encountered several real-world challenges. Debugging, performance optimization, and handling asynchronous operations were just a few. These hurdles forced me to expand my knowledge and seek creative solutions. The satisfaction of overcoming these challenges made me a better developer.",
        ],
      },
      {
        heading: "Collaborating and Continuous Learning",
        image: "/images/boyhome.png",
        image_description: "boy home",
        body: [
          "One of the most valuable aspects of the React community is its emphasis on collaboration and continuous learning. I engaged with fellow developers through online forums, attended local meetups, and even contributed to open-source projects. The knowledge-sharing culture within the React community is inspiring and motivating.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "My journey of creating apps with React has been an incredible experience. From humble beginnings to building complex web applications, React has been a reliable and flexible tool throughout. The learning curve, while steep at times, has been incredibly rewarding. I've not only honed my development skills but also gained a deeper appreciation for the power of React in modern web development.",
          "If you're considering diving into the world of React, I encourage you to take the plunge. Embrace the challenges, learn from the community, and enjoy the journey. Building apps with React is not just about coding; it's about crafting delightful user experiences and pushing the boundaries of what's possible on the web. Happy coding!",
        ],
      },
    ],
  };

  return (
    <div className="bg-orange-500 text-white flex flex-wrap gap-2 w-4/5 mx-auto my-0 mt-24 p-4">
      <div className="w-1/4 p-2">
        <div>
          <img src={blog.thumbnail} alt="icon" className="w-56 mx-auto my-0" />
        </div>
        <div className="outline outline-1 mt-2 p-2 text-black font-bold">
          <ul>
            <span className="text-3xl">Table of Content</span>
            {blog.table_of_content.map((item, itemIndex) => (
              <li key={itemIndex} className="text-lg cursor-pointer">
                {" "}
                - {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-3/5">
        <div>
          <h1 className="text-5xl mb-8 text-slate-950 font-bold">
            {blog.title}
          </h1>
          <div className="outline outline-1 p-2 m-4 flex justify-start gap-1 text-xl">
            <span className="m-2 text-2xl">
              <GrView style={{ display: "inline" }} /> : {blog.views.length}
            </span>
            <span className="m-2 text-2xl cursor-pointer">
              <AiOutlineLike
                style={{ display: "inline" }}
                onClick={() => {
                  console.log("update likes");
                }}
              />{" "}
              : {blog.likes.length}
            </span>
            <span
              className="m-2 text-2xl cursor-pointer"
              onClick={() => {
                console.log("add to bookmark");
              }}
            >
              <GrBookmark style={{ display: "inline" }} />
            </span>
            <span
              className="m-2 text-2xl cursor-pointer"
              onClick={() => {
                console.log("share");
              }}
            >
              <IoIosShareAlt style={{ display: "inline" }} />
            </span>
          </div>
        </div>
        <div>
          {blog.content.map((content, index) => (
            <div key={index} className="mb-3">
              <h2 className="text-3xl text-slate-950 font-semibold">
                {content.heading}
              </h2>
              {content.image && (
                <img
                  src={content.image}
                  alt={content.image_description}
                  className="w-40 mx-auto my-8"
                />
              )}
              {content.body.map((body, index) => (
                <p className="text-xl" key={index}>
                  {body}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
