import { AiFillCheckCircle } from 'react-icons/ai';
// TODO add Modal when User Sign Up Sucssesfully

export default function ModalSignUpSuccess() {
  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id">
      <div className="absolute bg-black opacity-70 inset-0 z-0"></div>
      <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        <div className="text-center p-5 flex-auto justify-center">
          <AiFillCheckCircle
            className="w-16 h-16 flex items-center text-[#4060FF] mx-auto"
            fill="currentColor"
          />
          <h2 className="text-xl font-bold py-4 ">Sign Up Success</h2>
          <p className="text-sm text-gray-500 px-8">Go to Login</p>
        </div>

        <div className="p-3  mt-2 text-center space-x-4 md:block">
          <a
            className="mb-2 md:mb-0 bg-[#4060FF] border border-violet-300 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-[16px] hover:shadow-lg hover:bg-[#3951c7] "
            href="/login">
            Login
          </a>
          <a
            className="mb-2 md:mb-0 bg-[#f3f0f0] border border-violet-300 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-[#898888] rounded-[16px] hover:shadow-lg hover:bg-[#d9d8d8] "
            href="/signup">
            Cancel
          </a>
        </div>
      </div>
    </div>
  );
}
