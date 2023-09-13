import PropTypes from "prop-types";
import { BiBookmark } from "react-icons/bi";
const Blog = ({ data, hashtags, handleAddToBookmark,handleMarkAsRead }) => {
  const {
    cover_image,
    title,
    author,
    author_image,
    posted_date,
    time_to_read,
  } = data;
  return (
    <div className="mb-10">
      <div>
        <img
          className="w-[845px] rounded-lg"
          src={cover_image}
          alt="blog cover page"
        />
      </div>
      <div>
        <div>
          <div className="flex justify-between mt-4">
            <div className="flex items-center gap-4">
              <img className="w-16" src={author_image} alt="" />
              <div>
                <h3 className="font-bold text-2xl">{author}</h3>
                <p>{posted_date}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p>
                <span>{time_to_read}</span> min read
              </p>
              <button onClick={()=>handleAddToBookmark(title)}>
                <BiBookmark></BiBookmark>
              </button>
            </div>
          </div>
          <div className="font-bold text-3xl mt-4">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="mt-4">
          <p>
            {hashtags.map((i, idx) => (
              <span key={idx}>#{i} </span>
            ))}
          </p>
          <button onClick={()=>{handleMarkAsRead(parseInt(time_to_read))}} className="text-purple-500 underline mt-4">
            Mark as read
          </button>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  data: PropTypes.object,
  hashtags: PropTypes.array,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
};

export default Blog;
