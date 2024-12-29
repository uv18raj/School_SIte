import React from 'react';
import './Resources.css';

function Resources() {
  const resources = [
    {
      id: 1,
      name: 'Alphabet Learning',
      description: 'Resource to help children learn the alphabet.',
      link: 'https://drive.google.com/file/d/10tl1UiLVaNVT1-tSFqnSFrL-1EkxXUIR/view',
      category: 'Language',
    },
    {
      id: 2,
      name: 'Number Counting',
      description: 'Resource to teach children counting.',
      link: 'https://drive.google.com/file/d/1dgitWqeLRVuO1YTeOu2VI6UMQPlhm1hE/view',
      category: 'Math',
    },
    {
      id: 3,
      name: 'Color Recognition',
      description: 'Downloadable coloring sheet for recognizing and naming colors.',
      link: 'https://drive.google.com/file/d/1Zv_0KR_Ave3NmSbpolSKUU2g5F4BJMyP/view',
      category: 'Creativity',
    },
    {
      id: 4,
      name: 'Storytime Videos',
      description: 'A collection of animated stories to develop listening and comprehension skills.',
      link: 'https://learnenglishkids.britishcouncil.org/category/topics/story-time',
      category: 'Language',
    },
    {
      id: 5,
      name: 'Shapes and Patterns',
      description: 'Activities to identify basic shapes and create fun patterns.',
      link: 'https://drive.google.com/file/d/161N4WyWLExy8c-129MVL6XCqQk2UqsWF/view',
      category: 'Math',
    },
  ];

  return (
    <div className="resources-container">
      <h1>Study Resources</h1>
      <p>Explore fun and educational resources designed to make learning enjoyable for kids.</p>
      <div className="resources-list">
        {resources.map((resource) => (
          <div className="resource-card" key={resource.id}>
            <h2>{resource.name}</h2>
            <p><strong>Category:</strong> {resource.category}</p>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="resource-link">
              Access Resource
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;
