function NoticeComponent({ admin }) {
  // Function to format date
  const formatDate = (dateString) => {
    return dateString.slice(0, 10);
  };
  return (
    <div className="grid">
      {admin.map((data) => (
        <div
          key={data._id}
          className="bg-blue-100 h-[36px]  w-auto  px-2 hover:border-b hover:border mb-4 hover:border-blue-500 rounded-md hover:h-[150px] overflow-y-scroll no-scrollbar"
        >
          <div className="flex place-items-center mt-1 bg-inherit sticky top-0 mb-2">
            <div className="ml-4 flex place-items-center justify-between w-full">
              <div className="text-md font-semibold whitespace-nowrap">
                {data.title}
              </div>
              <div className="text-[10px] mr-4">
                {formatDate(data.createdAt)}
              </div>
            </div>
          </div>
          <p className="text-sm p-4">{data.message}</p>
        </div>
      ))}
    </div>
  );
}

export default NoticeComponent;
