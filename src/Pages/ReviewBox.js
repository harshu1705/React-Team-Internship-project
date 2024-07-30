
import React from 'react';
import './reviewbox.css'; // Your CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css';
import myimage from '../assets/profilepic.png'




const ReviewEntry = ({ title }) => {
  return (
    <div className="review-box">

        <div className="review-top">
            <div className="Title font-bold">{title}</div>
            <div> Body of the review, thoughts of the user. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</div>
        </div>
        <div className="review-bottom">
            <img src={myimage} alt='image' width={50} height={50}/>
            <div className='name-date'>
                <p>Michelle McCarty</p>
                <p>1st August 2024</p>
            </div>

            {/* add stars for rating*/}
            <div>
                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
            </div>
        </div>  
    
    </div>
  );
};

export default ReviewEntry;
