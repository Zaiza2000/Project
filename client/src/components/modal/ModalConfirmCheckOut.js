export default function ModalConfirmCheckOut({ handleSubmit, closeModalHandler }) {

  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id">

      <div className="absolute bg-black opacity-70 inset-0 z-0"></div>
      <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        <div className="text-center p-5 flex-auto justify-center">

          <h2 className="text-xl font-bold py-4 ">ยืนยันการสั่งซื้อ</h2>
          <p className="text-sm text-gray-500 px-8">ใช่หรือไม่</p>
        </div>

        <div className="flex-row p-3 mt-2 text-center space-x-4 block">
          <button
            // onSubmit={handleSubmit}
            className="mb-2 md:mb-0 bg-[#DF5C5C] border px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-[16px] hover:shadow-lg">
            ยืนยันการสั่งซื้อ
          </button>
          <button
            data-dismiss="modal"
            // onClick={() => closeModalHandler(false)}
            className="close mb-2 md:mb-0 bg-[#F7F9FA] border px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-[#323131] rounded-[16px] hover:shadow-lg">
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  );
}
