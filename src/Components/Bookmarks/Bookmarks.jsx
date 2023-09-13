import PropTypes from "prop-types";
const Bookmarks = ({bookmarks}) => {

    return (
        <div>
            <div className='w-[400px]'>
            <div className="bg-purple-50 border-2 border-purple-400 p-4 rounded-lg mb-4 text-center"><h2 className="text-purple-600 font-bold text-xl">Spent time on read : <span>177min</span></h2></div>
            <div className="bg-orange-50 p-4 rounded-e-lg">
                <h2 className="font-bold text-xl mb-4">Bookmarked Blogs : <span>{bookmarks.length}</span></h2>
                <div className='text-center font-semibold'>
                    {
                        bookmarks.map((i,idx)=><p className='mb-2' key={idx}>{i}</p>)

                    }
                </div>
            </div>
        </div>
        </div>
    );
};
Bookmarks.propTypes={
    Bookmarks: PropTypes.object,
    bookmarks: PropTypes.object
}
export default Bookmarks;