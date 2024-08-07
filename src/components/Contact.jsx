import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });

      Swal.fire({
        icon: "success",
        title: "Thank you!",
        text: "Your message has been submitted.",
        type:"confirm"
      }).then(() => {
 
        window.location.reload();
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });

      Swal.fire({
        icon: "error",
        title: "Error!",
        text: `Error: ${msg}`,
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    try {
      const response = await axios.post(
        "https://formspree.io/f/xnqerrlk",
        inputs,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      handleServerResponse(
        true,
        "Thank you, your message has been submitted."
      );
    } catch (error) {
      handleServerResponse(false, error.response.data.error);
    }
  };

  const contact_info = [
    { logo: "mail", text: "junrey1296@gmail.com" },
    { logo: "logo-whatsapp", text: "(+63)933-4823-965" },
    {
      logo: "location",
      text: "Maguikay, Mandaue City, Cebu",
    },
  ];

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
      </div>

      <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
        <form className="flex flex-col flex-1 gap-5" onSubmit={handleOnSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your Name"
          />
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleOnChange}
            required
            value={inputs.email}
            placeholder="Your Email Address"
          />
          <textarea
            id="message"
            name="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
            placeholder="Your Message"
            rows={10}
          ></textarea>
          <button
            type="submit"
            disabled={status.submitting}
            className="btn-primary w-fit"
          >
            {!status.submitting
              ? !status.submitted
                ? "Submit"
                : "Submitted"
              : "Submitting..."}
          </button>
        </form>

        <div className="flex flex-col gap-7">
          {contact_info.map((contact, i) => (
            <div
              key={i}
              className="flex flex-row text-left gap-4 flex-wrap items-center"
            >
              <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <ion-icon name={contact.logo}></ion-icon>
              </div>
              <p className="md:text-base text-sm break-words">{contact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
