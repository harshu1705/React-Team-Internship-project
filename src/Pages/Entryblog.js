import React, { useState } from 'react';
import './blogentry.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import myimage from '../assets/profilepic.png';

const BlogEntry = ({ title, image, date, link }) => {
  return (
    <div
      className="blog-entry"
      onClick={() => window.location.href = link}
    >
      <div className="blog-entry-left">
        <img src={image} alt="Profile" width={100} height={100} />
        <div className='blog-date'>
          <p>{date}</p>
        </div>
      </div>
      <div className="blog-entry-right">
        <div className="title font-bold">{title}</div>
        <p>This would be the content of the blog.</p>
      </div>
    </div>
  );
};

export default BlogEntry;



































































// const BlogEntry = ({ title }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleContent = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="blog-entry">

//       <div className="blog-entry-left">
//         <img src={myimage} alt='image' width={100} height={100}/>
//         <div className='blog-date'>
//           <p>20th July 2024</p>
//         </div>
//       </div>
//       <div className="blog-entry-right">
//         <div className="title font-bold">{title}</div>
//         <p>
//           This would be the content of the blog.
//           <i
//             className="fa-solid fa-angle-down"
//             style={{ color: '#ffffff', cursor: 'pointer' }}
//             onClick={toggleContent}
//           ></i>
//         </p>
//         {isExpanded && (
//           <div className="expanded-content">
//             At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogEntry;
