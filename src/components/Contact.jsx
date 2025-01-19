import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import Popup from "./Popup";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [title, setTitle] = useState("");
  const [notification, setNotification] = useState("");

  const form = useRef(null);
  const name = useRef("");
  const email = useRef("");
  const message = useRef("");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  function handleSend(e) {
    e.preventDefault();

    if (
      name.current.value.trim().length === 0 ||
      email.current.value.trim().length === 0 ||
      message.current.value.trim().length === 0
    ) {
      setTitle("Email Sent Unsuccessfully!");
      setNotification("Have you filled all inputs?");
      setIsOpen(true);
      setIsError(true);
    } else {
      fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "gmail_service",
          template_id: "contact_form",
          user_id: "qfpX8zeDmabAOnUQx",
          template_params: {
            date: new Date().toLocaleDateString("en-PH", {
              timezone: "Asia/Manila",
            }),
            user_name: name.current.value.trim(),
            user_email: email.current.value.trim(),
            message: message.current.value.trim(),
          },
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
          }

          // Response is sometimes non json so we do this
          return response.json().catch(() => null);
        })
        .then(() => {
          setTitle("Email Sent Successfully!");
          setNotification("You're message has been sent.");
          setIsOpen(true);
          setIsError(false);
          form.current.reset();
        })
        .catch((error) => {
          setTitle("Email Sent Unsuccessfully!");
          setNotification("An error has occurred.");
          setIsOpen(true);
          setIsError(true);
          console.error("ERROR:", JSON.stringify(error));
        });
    }

    setTimeout(() => {
      setIsOpen(false);
    }, 3500);
  }

  return (
    <div
      ref={ref}
      id="contact"
      className="flex justify-center pb-16 bg-green md:pb-12"
    >
      <motion.div
        className="flex flex-col justify-between items-center gap-10 px-2 py-6 max-w-[1240px] text-white md:flex-row lg:gap-36 xl:p-16"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.95, delay: 0.4 }}
      >
        <div>
          <h2 className="font-bold text-2xl mb-3 sm:text-3xl md:text-4xl">
            Find us at
          </h2>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1374.7703100736296!2d121.32618717139727!3d14.075034939116982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sph!4v1737093637786!5m2!1sen!2sph"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[300px] border-8 rounded border-white sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px]"
          ></iframe>
        </div>

        <div className="md:text-right">
          <h2 className="font-bold text-2xl mb-3 sm:text-3xl md:text-4xl">
            Send us an email
          </h2>

          <form
            ref={form}
            onSubmit={handleSend}
            autoComplete="off"
            className="flex flex-col items-center gap-3"
          >
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                ref={name}
                type="text"
                name="user_name"
                className="w-[300px] mt-1 p-2 rounded text-green"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                ref={email}
                type="text"
                name="user_email"
                className="w-[300px] mt-1 p-2 rounded text-green"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                ref={message}
                name="message"
                className="w-[300px] h-[300px] mt-1 p-2 rounded text-green resize-none"
              ></textarea>
            </div>

            <button className="w-[150px] p-3 rounded bg-white text-blue transition hover:bg-whiteHover active:bg-whiteHover">
              Send Email
            </button>

            <Popup
              open={isOpen}
              error={isError}
              title={title}
              notification={notification}
            />
          </form>
        </div>
      </motion.div>
    </div>
  );
}
