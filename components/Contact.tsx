import React from "react";
import { useForm } from "react-hook-form";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Props = {};

const Contact: React.FC<Props> = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormState>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      const res = fetch("/api/sendMail", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("res: ", res);
      reset();
      alert("お問い合わせが送信されました。");
    } catch (error) {
      console.error("Fetch error : ", error);
      alert(JSON.stringify(error));
    }
  });

  return (
    <form onSubmit={onSubmit} className="mx-2 md:mx-32 lg:mx-64 mt-12">
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 text-sm font-medium">
          Your Name
        </label>
        <input
          type="text"
          className="border border-indigo-500 text-gray-900 text-sm rounded-md w-full p-2"
          {...register("name", { required: "必須項目です。" })}
        />
        {errors.name && (
          <span className="text-red-400 text-sm">{errors.name.message}</span>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Your Email
        </label>
        <input
          type="email"
          className="border border-indigo-500 text-gray-900 text-sm rounded-md w-full p-2"
          {...register("email", {
            required: "必須項目です。",
            pattern: {
              value: /^[\w\-._]+@[\w\-._]+\.[A-Za-z]+/,
              message: "メールアドレスを入力してください。",
            },
          })}
        />
        {errors.email && (
          <span className="text-red-400 text-sm">{errors.email.message}</span>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-sm font-medium">
          Message
        </label>
        <textarea
          className="border border-indigo-500 text-gray-900 text-sm rounded-md w-full p-2 h-32"
          placeholder="Type your message…"
          {...register("message", {
            required: "必須項目です。",
            maxLength: {
              value: 1000,
              message: "1000文字以内で入力してください。",
            },
          })}
        />
        {errors.message && (
          <span className="text-red-400 text-sm">{errors.message.message}</span>
        )}
      </div>
      <div className="text-center">
        <button className="bg-indigo-500 text-white rounded-md px-6 py-3">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
