import Student from "../Student"


function StudentList() {
  return (
    <div className=" ml-8 mt-4 bg-white h-[600px] w-[300px] rounded-lg shadow-xl overflow-y-scroll no-scrollbar">
          <div className="">
            <div className="sticky top-0 bg-white border-b border-black  mx-3 flex place-items-center h-10">
              <h2 className="pl-3 font-bold text-blue-400">Student List</h2>
            </div>
             {/* students can be added here */}
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />


          </div>
        </div>
  )
}

export default StudentList