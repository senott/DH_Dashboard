import React from 'react';

const Category: React.FC = ({ children }) => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-info text-white shadow">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default Category;
