import { useForm } from "@formspree/react";
const ContactMe = () => {
  const [state, handleSubmit] = useForm("maygldql");
  if (state.succeeded) {
    return (
      <p className="text-white text-center">Thanks for leaving a message!</p>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="text-white pt-[50px]">
      <div className="pb-5">
        <h1 className="text-4xl font-bold text-center pb-8">Contact Me</h1>
        <div className="border-cyan-300 border-b-4 mx-auto w-[40px] rounded-sm"></div>
      </div>
      <div>
        <div className="pb-6">
          <div className="pb-3">
            <label htmlFor="Name" className="font-light text-sm text-gray-300">
              FULL NAME
            </label>
          </div>
          <input
            type="text"
            id="Name"
            name="Name"
            className="w-full py-3.5 px-7 rounded-[4px] bg-gray-800"
          />
        </div>
        <div className="pb-6">
          <div className="pb-3">
            <label htmlFor="email" className="font-light text-sm text-gray-300">
              EMAIL
            </label>
          </div>
          <input
            id="Email"
            type="Email"
            name="Email"
            className="w-full py-3.5 px-7 rounded-[4px] bg-gray-800"
          />
        </div>
        <div className="pb-6">
          <div className="pb-3">
            <label
              htmlFor="message"
              className="font-light text-sm text-gray-300"
            >
              MESSAGE
            </label>
          </div>
          <textarea
            id="Message"
            name="Message"
            rows={8}
            className="w-full py-3.5 px-7 resize-none rounded-[4px] bg-gray-800"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-white text-black py-3 px-4 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactMe;
