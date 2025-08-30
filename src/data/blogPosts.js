export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt: "Learn how to use React Hooks to simplify your functional components and manage state effectively in modern React applications.",
    content: `# Getting Started with React Hooks

React Hooks revolutionized how we write React components. They allow you to use state and other React features without writing classes.

## What are Hooks?
Hooks are functions that let you "hook into" React state and lifecycle features from function components.

## Basic Hooks
- useState: For managing state
- useEffect: For side effects
- useContext: For accessing context

## Example Usage
\`\`\`jsx
import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

Hooks make your code more reusable and easier to understand.`,
    date: "2024-01-15",
    readTime: "5 min read",
    author: "John Doe",
    category: "React",
    slug: "getting-started-with-react-hooks",
    image: "📚"
  },
  {
    id: 2,
    title: "Mastering CSS Grid Layout",
    excerpt: "A comprehensive guide to CSS Grid Layout and how to create complex responsive designs with ease using modern CSS techniques.",
    content: `# Mastering CSS Grid Layout

CSS Grid is a powerful layout system designed for two-dimensional layouts.

## Grid Basics
- grid-template-columns: Define column sizes
- grid-template-rows: Define row sizes
- grid-gap: Space between grid items

## Example
\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}
\`\`\`

Grid makes complex layouts simple and responsive.`,
    date: "2024-01-10",
    readTime: "8 min read",
    author: "Jane Smith",
    category: "CSS",
    slug: "mastering-css-grid-layout",
    image: "🎨"
  },
  {
    id: 3,
    title: "TypeScript Best Practices",
    excerpt: "Discover the best practices for writing clean and maintainable TypeScript code in your projects with type safety and better tooling.",
    content: `# TypeScript Best Practices

TypeScript brings static typing to JavaScript, making your code more robust.

## Key Practices
- Use strict mode
- Define proper interfaces
- Use generics wisely
- Avoid any type

## Interface Example
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

function createUser(user: User): User {
  return user;
}
\`\`\`

TypeScript helps catch errors at compile time.`,
    date: "2024-01-05",
    readTime: "6 min read",
    author: "Mike Johnson",
    category: "TypeScript",
    slug: "typescript-best-practices",
    image: "🔒"
  },
  {
    id: 4,
    title: "Building Scalable APIs with Node.js",
    excerpt: "Learn how to build robust and scalable RESTful APIs using Node.js and Express framework with best practices for production.",
    content: `# Building Scalable APIs with Node.js

Node.js is perfect for building fast, scalable APIs.

## Best Practices
- Use Express.js framework
- Implement proper error handling
- Use middleware effectively
- Add authentication

## Basic Server
\`\`\`javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

Node.js enables building high-performance APIs.`,
    date: "2023-12-28",
    readTime: "10 min read",
    author: "Sarah Wilson",
    category: "Node.js",
    slug: "building-scalable-apis-nodejs",
    image: "🚀"
  },
  {
    id: 5,
    title: "Introduction to Machine Learning",
    excerpt: "A beginner's guide to understanding machine learning concepts, algorithms, and practical applications in modern software development.",
    content: `# Introduction to Machine Learning

Machine learning is transforming how we build software applications.

## Basic Concepts
- Supervised learning
- Unsupervised learning
- Neural networks
- Training models

## Common Algorithms
- Linear regression
- Decision trees
- K-means clustering
- Neural networks

ML opens up new possibilities for intelligent applications.`,
    date: "2023-12-20",
    readTime: "12 min read",
    author: "David Brown",
    category: "Machine Learning",
    slug: "introduction-machine-learning",
    image: "🤖"
  },
  {
    id: 6,
    title: "Web Performance Optimization",
    excerpt: "Techniques and strategies to optimize your website performance, improve user experience, and achieve better SEO rankings.",
    content: `# Web Performance Optimization

Website performance is crucial for user experience and SEO.

## Optimization Techniques
- Image optimization
- Code splitting
- Caching strategies
- CDN usage

## Tools
- Lighthouse
- WebPageTest
- GTmetrix
- Chrome DevTools

Performance optimization is an ongoing process.`,
    date: "2023-12-15",
    readTime: "7 min read",
    author: "Emily Davis",
    category: "Performance",
    slug: "web-performance-optimization",
    image: "⚡"
  }
];