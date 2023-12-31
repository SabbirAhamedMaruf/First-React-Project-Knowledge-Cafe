import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog-Content/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookmark,handleMarkAsRead }) => {
  const [loadData, setLoadData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setLoadData(data));
  }, []);

  return (
    <div>
      <div>
        {loadData.map((i, idx) => (
          <Blog
            key={idx}
            data={i}
            hashtags={i.hashtags}
            handleAddToBookmark={handleAddToBookmark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  Blogs: PropTypes.object,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
};

export default Blogs;
