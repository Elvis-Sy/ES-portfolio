import { useState, useEffect, useRef } from "react";
import Filter from "bad-words";
import toast, { Toaster } from "react-hot-toast";
import Fade from "react-reveal/Fade";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import mail from "./mailer";
import styles from "./Contact.module.scss";
import { MENULINKS } from "../../constants";
import { useTranslation } from "react-i18next";

const filter = new Filter();
filter.removeWords("hell", "god", "shit");

const toastOptions = {
  style: {
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
    fontFamily: "sans-serif",
  },
};

const empty = (t) => {
  toast.error(t("required"), {
    id: "empty",
  });
}

const error = (t) => {
  toast.error(t("error"), {
    id: "error",
  });
}

const success = (t) => {
  toast.success(t("success"), {
    id: "success",
  });
}

const Contact = () => {
  const initialState = { name: "", email: "", message: "" };
  const [formData, setFormData] = useState(initialState);
  const [mailerResponse, setMailerResponse] = useState("not initiated");
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({});
  const buttonElementRef = useRef(null);
  const sectionRef = useRef(null);
  const {t} = useTranslation();

  const handleChange = ({ target }) => {
    const { id, value } = target;
    value.length === 0 ? setIsSending(false) : setIsSending(true);
    setFormData((prevVal) => {
      if (
        value.trim() !== prevVal[id] &&
        value.trim().length > prevVal[id].trim().length
      ) {
        return { ...prevVal, [id]: filter.clean(value.trim()) };
      } else {
        return { ...prevVal, [id]: value };
      }
    });
  };

  const validateForm = (data) => {
    const errors = {};

    // Name : minimum 2 caractères
    if (!data.name || data.name.trim().length < 2) {
      errors.name = "valideName";
    }

    // Email : regex robuste
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!data.email || !emailRegex.test(data.email)) {
      errors.email = "valideEmail";
    }

    return errors;
  };


  const emptyForm = () => {
    setFormData(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm(formData);
    const { name, email, message } = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    if (name === "" || email === "" || message === "") {
      empty(t);
      return ;
    } else if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    animateButton();
    setErrors({});
    setIsSending(true);
    mail({ name, email, message })
      .then((res) => {
        if (res.status === 200) {
          success(t);
          emptyForm();
        } else {
          error(t);
        }
      })
      .catch((err) => {
        error(t);
        console.error(err);
      });
  };

  const animateButton = () => {
    const btn = buttonElementRef.current;
    if (btn.classList.contains("active")) return;
    btn.classList.add("active");

    gsap.to(btn, {
      keyframes: [
        {
          "--left-wing-first-x": 50,
          "--left-wing-first-y": 100,
          "--right-wing-second-x": 50,
          "--right-wing-second-y": 100,
          duration: 0.2,
          onComplete() {
            gsap.set(btn, {
              "--left-wing-first-y": 0,
              "--left-wing-second-x": 40,
              "--left-wing-second-y": 100,
              "--left-wing-third-x": 0,
              "--left-wing-third-y": 100,
              "--left-body-third-x": 40,
              "--right-wing-first-x": 50,
              "--right-wing-first-y": 0,
              "--right-wing-second-x": 60,
              "--right-wing-second-y": 100,
              "--right-wing-third-x": 100,
              "--right-wing-third-y": 100,
              "--right-body-third-x": 60,
            });
          },
        },
        {
          "--left-wing-third-x": 20,
          "--left-wing-third-y": 90,
          "--left-wing-second-y": 90,
          "--left-body-third-y": 90,
          "--right-wing-third-x": 80,
          "--right-wing-third-y": 90,
          "--right-body-third-y": 90,
          "--right-wing-second-y": 90,
          duration: 0.2,
        },
        {
          "--rotate": 50,
          "--left-wing-third-y": 95,
          "--left-wing-third-x": 27,
          "--right-body-third-x": 45,
          "--right-wing-second-x": 45,
          "--right-wing-third-x": 60,
          "--right-wing-third-y": 83,
          duration: 0.25,
        },
        {
          "--rotate": 60,
          "--plane-x": -8,
          "--plane-y": 40,
          duration: 0.2,
        },
        {
          "--rotate": 40,
          "--plane-x": 45,
          "--plane-y": -300,
          "--plane-opacity": 0,
          duration: 0.375,
          onComplete() {
            setTimeout(() => {
              btn.removeAttribute("style");
              gsap.fromTo(
                btn,
                {
                  opacity: 0,
                  y: -8,
                },
                {
                  opacity: 1,
                  y: 0,
                  clearProps: true,
                  duration: 0.3,
                  onComplete() {
                    btn.classList.remove("active");
                  },
                }
              );
            }, 1800);
          },
        },
      ],
    });

    gsap.to(btn, {
      keyframes: [
        {
          "--text-opacity": 0,
          "--border-radius": 0,
          "--left-wing-background": "#2ecc71",
          "--right-wing-background": "#2ecc71",
          duration: 0.11,
        },
        {
          "--left-wing-background": "#1e5631",
          "--right-wing-background": "#1e5631",
          duration: 0.14,
        },
        {
          "--left-body-background": "#2ecc71",
          "--right-body-background": "#2ecc71",
          duration: 0.25,
          delay: 0.1,
        },
        {
          "--trails-stroke": 171,
          duration: 0.22,
          delay: 0.22,
        },
        {
          "--success-opacity": 1,
          "--success-x": 0,
          duration: 0.2,
          delay: 0.15,
        },
        {
          "--success-stroke": 0,
          duration: 0.15,
        },
      ],
    });
  }

  useEffect(() => {
    setTimeout(() => {
      setMailerResponse("not initiated");
    }, 10000);
  }, [mailerResponse]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "none" } });

    tl.from(
      sectionRef.current.querySelectorAll(".staggered-reveal"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    ScrollTrigger.create({
      trigger: sectionRef.current.querySelector(".contact-wrapper"),
      start: "100px bottom",
      end: "center center",
      scrub: 0,
      animation: tl,
    });

    return () => tl.kill();
  }, [sectionRef]);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[4].ref}
      className="mt-30 w-full relative select-none bg-black pt-20 sm:pt-10 md:pt-5 lg:pt-1 pb-20"
    >
      <div>
        <Toaster toastOptions={toastOptions} />
      </div>
      <div className="section-container flex flex-col justify-center">
        <div className="flex flex-col contact-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              CONTACT
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              Contact
            </h1>
          </div>
          <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
            {t("introContact")}{" "}
          </h2>
        </div>

        <form className="pt-10 sm:mx-auto sm:w-[30rem] md:w-[35rem] staggered-reveal">
          <Fade bottom distance={"4rem"}>
            <div className="">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute top-0 left-0 h-full flex items-center pl-4 text-lg font-mono transform transition-all"
                >
                  {t("name")}
                </label>
              </div>
              {errors.name && (
                <p className="text-center font-semibold text-[#f87171] text-sm mt-1">{t(errors.name)}</p>
              )}
            </div>

            <div className="mt-14">
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  className="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute top-0 left-0 h-full flex items-center pl-4 text-lg font-mono transform transition-all"
                >
                  {t("email")}
                </label>
              </div>
              {errors.email && (
                <p className="text-center font-semibold text-[#f87171] text-sm mt-1">{t(errors.email)}</p>
              )}
            </div>

            <div className="relative mt-14">
              <textarea
                id="message"
                className="block w-full h-auto min-h-[10rem] max-h-[20rem] sm:h-14 py-2 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="message"
                className="absolute top-0 left-0 h-14 flex items-center pl-4 text-lg font-mono transform transition-all"
              >
                Message
              </label>
            </div>
          </Fade>

          {/* {mailerResponse !== "not initiated" &&
            (mailerResponse === "success" ? (
              <div className="hidden">{success(t)}</div>
            ) : mailerResponse === "empty" ? (
              <div className="hidden">{empty(t)}</div>
            ) : (
              <div className="hidden">{error(t)}</div>
            ))
          } */}
        </form>
        <div className="mt-9 mx-auto link">
          <button
            ref={buttonElementRef}
            className={styles.button}
            onClick={handleSubmit}
          >
            <span>{t("send")} -&gt;</span>
            <span className={styles.success}>
              <svg viewBox="0 0 16 16">
                <polyline points="3.75 9 7 12 13 5"></polyline>
              </svg>
              {t("sent")}
            </span>
            <svg className={styles.trails} viewBox="0 0 33 64">
              <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
              <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
            </svg>
            <div className={styles.plane}>
              <div className={styles.left} />
              <div className={styles.right} />
            </div>
          </button>
        </div>
      </div>
      <style jsx global>{`
        input,
        label,
        textarea {
          cursor: none;
        }

        input:hover,
        textarea:hover {
          box-shadow: 0 0 0.3rem #3eb489;
        }

        input:active,
        input:focus,
        textarea:active,
        textarea:focus {
          box-shadow: 0 0 0.3rem #000000;
        }

        input:focus + label,
        input:valid + label {
          height: 50%;
          padding-left: 0;
          transform: translateY(-100%);
        }

        textarea:focus + label,
        textarea:valid + label {
          height: 17%;
          padding-left: 0;
          transform: translateY(-100%);
        }
      `}</style>
    </section>
  );
};

export default Contact;
