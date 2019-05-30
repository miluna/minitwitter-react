import React from 'react';
import load from "../media/loading.png";
import "../styles/Loading.css";

const Loading = () => {
    return (
        <div className="loading-icon">
            <img src={load} alt="loading-icon" />
        </div>
    );
};

export default Loading;
