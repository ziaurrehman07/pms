import { useState } from "react";
import PropTypes from "prop-types";
function NoticeComponent({ admin }) {
  const [openNoticeId, setOpenNoticeId] = useState(null);
  const [openedNotices, setOpenedNotices] = useState([]);

  const toggleNotice = (noticeId) => {
    setOpenNoticeId(openNoticeId === noticeId ? null : noticeId);
    if (!openedNotices.includes(noticeId)) {
      setOpenedNotices([...openedNotices, noticeId]);
    }
  };

  // Function to format date
  const formatDate = (dateString) => {
    return dateString.slice(0, 10);
  };

  return (
    <div className="flex flex-col w-full items-center">
      {admin.map((data) => (
        <div
          key={data._id}
          className={`bg-blue-100 w-[300px] md:w-full px-2 mb-4 rounded-md ${
            openNoticeId === data._id
              ? "hover:border-b hover:border-blue-500"
              : ""
          }`}
        >
          <div
            className="flex place-items-center mt-3  sticky top-0 mb-2 cursor-pointer"
            onClick={() => toggleNotice(data._id)}
          >
            <div className="mx-4 text-sm font-semibold whitespace-nowrap flex place-items-center justify-between w-full">
              {data.title}
              <span className="text-xs ml-4">{formatDate(data.createdAt)}</span>
            </div>
          </div>
          {openNoticeId === data._id && (
            <div className="p-4 border-t border-gray-300">
              <p className="text-sm">{data.message}</p>
              <div className="h-20"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
NoticeComponent.propTypes = {
  admin: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default NoticeComponent;
