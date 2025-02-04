const Form = () => {
  return (
    <>
      <form action="#" method="POST">
        <div className="flex flex-col mb-5">
          <label htmlFor="name" className="text-xl text-left">
            Task Name
          </label>
          <input
            type="text"
            placeholder="Write task name here.."
            className="bg-white border-2 border-gray-400 rounded p-1 mt-2 focus:border-blue-400 focus:outline-0"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="date" className="text-xl text-left">
            Date
          </label>
          <input
            type="date"
            className="bg-white border-2 border-gray-400 rounded p-1 mt-2 focus:border-blue-400 focus:outline-0"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="priority" className="text-xl text-left">
            Priority
          </label>
          <input
            type="text"
            placeholder="Choose the value between 1-5"
            className="bg-white border-2 border-gray-400 rounded p-1 mt-2 focus:border-blue-400 focus:outline-0"
          />
        </div>
        <div className="bg-blue-500 w-fit px-5 py-3 rounded-lg">
          <button type="submit" className="text-white font-bold text-md">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
