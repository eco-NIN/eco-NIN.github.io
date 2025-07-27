import React from 'react';

const RecentUpdates = ({ 
  updates = [
    {
      title: "Paper accepted",
      description: "at ICML 2024: \"Novel Approaches to Deep Learning\"",
      date: "March 2024"
    },
    {
      title: "Conference presentation",
      description: "at NeurIPS 2023",
      date: "December 2023"
    },
    {
      title: "Research grant",
      description: "awarded for AI ethics project",
      date: "November 2023"
    }
  ]
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Recent Updates</h2>
      <div className="space-y-4">
        {updates.map((update, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-gray-700">
                <span className="font-medium">{update.title}</span> {update.description}
              </p>
              <p className="text-sm text-gray-500">{update.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentUpdates; 