import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'


function App() {
  // Since the Bookmark componenet declared inside App.jsx and we are going to trigger inside Blog.jsx that why we are doing props drilling , state lift up concept here. We trigger the eventhandler called handleAddtoBookmark from blog.jsx because we push the data from blog.jsx where we sending the title that corrosponding bookmark. but we use this data inside Bookmark component here.
  const [bookmarks,setBookMarks]= useState([]);
  const handleAddToBookmark=(currentBlog)=>{
    const newBookmarks = [...bookmarks,currentBlog];
    setBookMarks(newBookmarks);
  }

  let [markAsRead, setMarkAsRead] = useState(0);
  const handleMarkAsRead =(time)=>{
    markAsRead=markAsRead+time;
    setMarkAsRead(markAsRead);
  }
  console.log(markAsRead);

  return (
    <>
      <Header></Header>
      <div className="flex justify-center gap-8 w-4/5 m-auto mt-10">
        <Blogs  handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks  bookmarks={bookmarks} markAsRead={markAsRead}>
          
        </Bookmarks>
      </div>
    </>
  )
}

export default App
