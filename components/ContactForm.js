"use client";

import React, { useState } from "react";
import axios from "axios";
import { LinkArrow } from "@/components/Icon";

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
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
        name: "",
        phone: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
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
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mwkgbeqa",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(true, "Спасибо, Ваша заявка отправлена");
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div className="flex items-center flex-col mt-8">
      <h1>Можете также оставить свою заявку здесь и я с Вами свяжусь</h1>
      <hr />
      <form
        onSubmit={handleOnSubmit}
        className="flex items-center flex-col text-dark/75 dark:text-light/75"
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          onChange={handleOnChange}
          required
          value={inputs.name}
          className=" border-[1px] border-dark/75 dark:border-light/75 bg-light dark:bg-dark rounded-xl w-full p-2  text-center"
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="phone"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.phone}
          className="border-[1px] border-dark/75 dark:border-light/75 bg-light dark:bg-dark rounded-xl w-full p-2 text-center"
        />
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="укажите дату, время и необходимую процедуру)"
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
          className="border-[1px] border-dark/75 dark:border-light/75 bg-light dark:bg-dark rounded-xl p-2 text-[8px] text-center w-full"
        />

        <button
          type="submit"
          disabled={status.submitting}
          className="flex items-center my-4 bg-dark text-light dark:bg-light dark:text-dark px-4 rounded-lg md:text-lg font-semibold
                   hover:bg-light hover:text-dark
                   border-2 border-solid border-transparent hover:border-dark
                    dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                    p-2 md:p-2.5 md:px-6 text-base"
        >
          {!status.submitting
            ? !status.submitted
              ? " Записаться"
              : "Записаны"
            : "Записываем..."}
          <LinkArrow className="w-6 ml-1" />
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </div>
  );
};

export default ContactForm;
