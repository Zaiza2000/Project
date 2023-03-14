import React from "react";


export default function UploadImage() {


    return (
        <div>

            <label className="block mb-2 text-sm font-medium text-gray-900 " for="file_input">Upload file</label>
            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none " aria-describedby="file_input_help" id="file_input" type="file" />
            <p className="mt-1 text-sm text-gray-500 " id="file_input_help">SVG, PNG, JPG (MAX. 800x400px).</p>


        </div>
    );
}
