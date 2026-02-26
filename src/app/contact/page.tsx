"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ReactPhoneInput from "react-phone-input-2";
import { Controller } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  counsellingType: z.string().min(1, "Please select a counselling type"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;
const Page = () => {
  const [countryCode, setCountryCode] = useState("de");
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      counsellingType: "",
      message: "",
    },
  });

  // const [formDate, setFormData] = useState<FormData>({
  //   counsellingType: "",
  //   email: "",
  //   message: "",
  //   name: "",
  //   phone: "",
  // });

  // default fallback
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data?.country_code) {
          setCountryCode(data.country_code.toLowerCase()); // like 'de', 'in'
        }
      })
      .catch((err) => {
        console.error("Failed to fetch country", err);
      });
  }, []);

  const onSubmit = (val: FormValues) => {
    console.log(val);
  };
  return (
    <div className="w-full  flex min-h-screen flex-col gap-24 items-center justify-center px-14 py-24">
      <div className="md:max-w-7xl w-full mx-auto flex flex-col md:px-14 px-6 gap-18 items-stretch">
        <div className="bg-accent w-full flex flex-col items-center justify-center rounded-2xl px-20 py-10 ">
          <h2 className="text-white font-bold text-5xl leading-17 text-center">
            Let’s Strengthen Your IT Together
          </h2>
          <p className=" text-lg leading-6 font-normal text-center text-[#F9F9F9]">
            Have questions about cybersecurity, infrastructure, or IT support?
            Share your details below and our team will respond promptly with
            expert guidance and clear next steps.
          </p>
        </div>

        <div
          className={`flex items-stretch justify-center flex-1 gap-8 h-fit `}
        >
          <div className="w-1/2 relative aspect-43/50 max-md:hidden rounded-2xl">
            <img
              src={"/images/contact.png"}
              alt="why-us"
              className="rounded-2xl object-cover h-full w-full"
              loading="lazy"
            />
          </div>

          <div className="md:w-1/2 w-full text-muted-foreground gap-8 flex flex-col items-start border border-border p-6 rounded-2xl shadow-black">
            <div>
              <h1 className="font-medium  text-primary md:text-2xl leading-7">
                Let’s Talk About Your IT Goals
              </h1>
            </div>

            <div className="text-primary font-[var(--font-heading)] w-full">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 w-full"
              >
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Name"
                    className="border border-border p-4 w-full rounded-md"
                    id="name"
                  />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Working email id"
                    className="border border-border p-4 w-full rounded-md"
                    id="email"
                  />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <ReactPhoneInput
                        country="in"
                        value={field.value}
                        onChange={field.onChange}
                        containerClass="w-full" // 🔥 important
                        inputClass="!w-full p-4 border border-border rounded-md"
                        buttonClass="!border-border"
                        specialLabel="Phone Number"
                        placeholder="Enter phone number"
                      />
                    )}
                  />

                  {errors.phone && (
                    <p className="text-red-500 text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="counsellingType">Counselling Type</label>
                  <select
                    id="counsellingType"
                    {...register("counsellingType")}
                    className="border border-border p-4 w-full rounded-md relative"
                  >
                    <option value="" className="p-4">Select type</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="message">Message</label>
                  <textarea
                    {...register("message")}
                    placeholder="Tell us how we can help you"
                    className="border border-border p-4 w-full rounded-md h-20 resize-none"
                    id="message"
                    
                  />
                </div>

                <Button className="w-full h-[56px]" type="submit">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
