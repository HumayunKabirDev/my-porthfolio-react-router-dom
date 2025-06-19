import React from "react";
import Container from "../Container";

const Contact = () => {
  return (
    <div className="bg-primaryC pb-[80px] p-5  text-white">
      <Container>
        <div data-aos="zoom-in-up" data-aos-duration="800" data-aos-easing="ease-in-sine" className="md:pl-[420px] px-5 py-5 sm:w-full">
          <h4 className="text-[30px] pb-5 font-bold">Contact Me</h4>
          <form className="w-full md:w-full bg-bgColor rounded-[10px] border  shadow-md shadow-green-500 p-10">
              <label class="block text-sm font-medium">Enter Name :</label>
              <input type="Text" class="mt-2 p-2 w-full mb-3 rounded-md" placeholder="Text" />

              <label class="block text-sm font-medium">Enter Email :</label>
              <input type="email" class="mt-2 p-2 w-full mb-3 rounded-md" placeholder="Email" />

              <label class="block text-sm font-medium">Mobile Number :</label>
              <input type="number" class="mt-2 p-2 w-full mb-3 rounded-md" placeholder="Number" />

              <textarea id="message" class="mt-1 p-2 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter Your Message"></textarea>

              <button class="bg-buttonC text-white px-3 py-2 rounded-lg">Send Meassage</button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;

