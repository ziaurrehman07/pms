function FeedbackComponent() {
  return (
    <div className="bg-gray-100 h-[36px]  w-44 px-2 hover:border-b hover:border mb-4 mr-4 hover:border-blue-500 rounded-md hover:h-[150px] overflow-y-scroll no-scrollbar">
      <div className="bg-inherit sticky top-0 mb-2">
        <h1 className="text-md font-mono">Student Name</h1>
        <p className="text-xs -mt-2 font-semibold text-blue-500">Enrollment</p>
      </div>
      <p className="text-sm">
        Description.... Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Porro blanditiis adipisci sit! Odit harum praesentium maiores dolorem
        repellat accusamus! Temporibus.
      </p>
    </div>
  );
}

export default FeedbackComponent;
