import React from 'react';

const ResearchInterests = ({ 
  interests = [
    {
      title: "Machine Learning",
      description: "Deep learning, neural networks, and their applications in computer vision and natural language processing."
    },
    {
      title: "Artificial Intelligence",
      description: "AI systems, reinforcement learning, and intelligent decision-making algorithms."
    },
    {
      title: "Data Science",
      description: "Big data analytics, statistical modeling, and predictive analytics for real-world applications."
    },
    {
      title: "Computer Vision",
      description: "Image processing, object detection, and visual understanding systems."
    }
  ]
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Research Interests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interests.map((interest, index) => (
          <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{interest.title}</h3>
            <p className="text-gray-700">
              {interest.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchInterests; 