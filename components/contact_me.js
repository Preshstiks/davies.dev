import { useForm } from "@formspree/react";
import { useEffect } from "react";
const ContactMe = () => {
  const [state, handleSubmit] = useForm("maygldql");
  if (state.succeeded) {
    return (
      <div id={"contact"}>
        <p className="text-white py-[150px] text-center">
          Thanks for leaving a message!
        </p>
      </div>
    );
  }
  // useEffect(() => {
  //   if (state.succeeded) {
  //     // Scroll to the desired element
  //     const about = document.getElementById("about"); // Replace "navbar" with the id of the element you want to scroll to
  //     if (about) {
  //       navbar.scrollIntoView({ behavior: "smooth" });
  //       // alert("working");
  //     }
  //   }
  // }, [state.succeeded]);
  return (
    <>
      <form
        id={"contact"}
        onSubmit={handleSubmit}
        className="text-white py-[140px] px-[20%]"
      >
        <div className="pb-5">
          <h1 className="text-4xl font-bold text-center pb-8">Contact Me</h1>
          <div className="border-cyan-300 border-b-4 mx-auto w-[40px] rounded-sm"></div>
        </div>
        <div>
          <div className="pb-6">
            <div className="pb-3">
              <label
                htmlFor="Name"
                className="font-light text-sm text-gray-300"
              >
                FULL NAME
              </label>
            </div>
            <input
              type="text"
              id="Name"
              name="Name"
              className="w-full outline-none py-3.5 px-7 rounded-[4px] bg-gray-800"
            />
          </div>
          <div className="pb-6">
            <div className="pb-3">
              <label
                htmlFor="email"
                className="font-light text-sm text-gray-300"
              >
                EMAIL
              </label>
            </div>
            <input
              id="Email"
              type="Email"
              name="Email"
              className="w-full outline-none py-3.5 px-7 rounded-[4px] bg-gray-800"
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
              className="w-full py-3.5 px-7 outline-none resize-none rounded-[4px] bg-gray-800"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-white w-full text-black py-3 px-4 rounded-md"
        >
          {state.submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
};

export default ContactMe;
