const ContactMe = () => {
  return (
    <div className="text-white pt-[50px]">
      <div className="pb-5">
        <h1 className="text-4xl font-bold text-center pb-8">Contact Me</h1>
        <div className="border-cyan-300 border-b-4 mx-auto w-[40px] rounded-sm"></div>
      </div>
      <div>
        <div className="pb-6">
          <div className="pb-3">
            <label htmlFor="name" className="font-light text-sm text-gray-300">
              FULL NAME
            </label>
          </div>
          <input
            type="text"
            className="w-full py-3.5 px-7 rounded-[4px] bg-gray-800"
          />
        </div>
        <div className="pb-6">
          <div className="pb-3">
            <label htmlFor="name" className="font-light text-sm text-gray-300">
              EMAIL
            </label>
          </div>
          <input
            type="email"
            className="w-full py-3.5 px-7 rounded-[4px] bg-gray-800"
          />
        </div>
        <div className="pb-6">
          <div className="pb-3">
            <label htmlFor="name" className="font-light text-sm text-gray-300">
              MESSAGE
            </label>
          </div>
          <textarea
            rows={8}
            className="w-full py-3.5 px-7 resize-none rounded-[4px] bg-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
