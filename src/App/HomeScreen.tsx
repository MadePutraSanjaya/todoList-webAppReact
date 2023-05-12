import React from 'react'

import CardList from "../Components/CardList/CardList"

const HomeScreen: React.FC = () => {
  return (
    <div className="container">
      <div className="section-header">
        <h2>Hi Jhon Doe</h2>
      </div>

      <div className="section-bottom">
        <CardList />
      </div>
    </div>
  );
}

export default HomeScreen