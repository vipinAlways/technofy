"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ReactPhoneInput from "react-phone-input-2";
import { Controller } from "react-hook-form";
import { toast } from "sonner";
import { useAtomValue } from "jotai";
import { entryUrlAtom, sessionIdAtom } from "@/components/root/Provider";
import { useRouter } from "next/navigation";

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
  const entryUrl = useAtomValue(entryUrlAtom);
  const sessionId = useAtomValue(sessionIdAtom);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
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

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data?.country_code) {
          setCountryCode(data.country_code.toLowerCase());
        }
      })
      .catch((err) => {
        console.error("Failed to fetch country", err);
      });
  }, []);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const toastId = toast.loading("Submitting form...");

    try {
      const payload = {
        formId: "contact",
        ...values,
        sourceUrl: typeof window !== "undefined" ? window.location.href : "",
        referrerUrl: typeof document !== "undefined" ? document.referrer : "",
        entryUrl,
        sessionId,
      };

      const res = await fetch("/api/submit-forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.message || "Form submission failed");
      }

      reset();
      toast.success("Form submitted successfully", { id: toastId });

      router.push("/thankyou");
    } catch (error) {
      console.error("Form submit error:", error);
      toast.error(
        error instanceof Error ? error.message : "Error submitting form",
        { id: toastId },
      );
    }
  };

  return (
    <div className="w-full flex min-h-screen flex-col gap-24 items-center justify-center px-14 pb-24 pt-32 ">
      <div className="md:max-w-7xl w-full mx-auto flex flex-col md:px-14 px-6 gap-16 items-stretch">
        <div className="bg-accent w-full flex flex-col items-center justify-center rounded-2xl px-20 py-10 gap-4">
          <h2 className="text-white font-bold text-5xl leading-tight text-center">
            Let's Strengthen Your IT Together
          </h2>
          <p className="text-base w-[70%] leading-6 font-normal text-center text-muted-foreground">
            Have questions about cybersecurity, infrastructure, or IT support?
            Share your details below and our team will respond promptly with
            expert guidance and clear next steps.
          </p>
        </div>

        <div className="flex items-stretch justify-center flex-1 gap-8 h-fit">
          <div className="w-1/2 relative aspect-43/50 max-md:hidden rounded-2xl">
            <img
              src="/images/contact.png"
              alt="contact"
              className="rounded-2xl object-cover h-full w-full"
              loading="lazy"
            />
          </div>

          <div className="md:w-1/2 w-full text-muted-foreground gap-8  bg-white flex flex-col items-start border border-border p-6 rounded-2xl shadow-md">
            <div>
              <h1 className="font-medium text-primary md:text-2xl leading-7">
                Let's Talk About Your IT Goals
              </h1>
            </div>

            <div className="text-primary w-full">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex font-[var(--font-heading)] flex-col gap-4 w-full "
              >
                {/* Name */}
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-lg font-medium " htmlFor="name" >
                    Name
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Name"
                    className="border border-border p-4 w-full rounded-lg"
                    id="name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-lg font-medium " htmlFor="email">Email</label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Working email id"
                    className="border border-border p-4 w-full rounded-lg"
                    id="email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2 w-full">
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <ReactPhoneInput
                        country={countryCode || "in"}
                        value={field.value}
                        onChange={field.onChange}
                        containerClass="w-full text-lg font-medium "
                        inputClass="!w-full p-4 border border-border rounded-lg "
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

                {/* Counselling Type */}
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-lg font-medium " htmlFor="counsellingType">Service Type</label>
                  <select
                    id="counsellingType"
                    {...register("counsellingType")}
                    className="border border-border p-4 w-full rounded-lg"
                  >
                    <option value="">Select a service</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="infrastructure">IT Infrastructure</option>
                    <option value="support">IT Support</option>
                    <option value="cloud">Cloud Services</option>
                  </select>
                  {errors.counsellingType && (
                    <p className="text-red-500 text-sm">
                      {errors.counsellingType.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-lg font-medium " htmlFor="message">Message</label>
                  <textarea
                    {...register("message")}
                    placeholder="Tell us how we can help you"
                    className="border border-border p-4 w-full rounded-lg h-20 resize-none"
                    id="message"
                  />
                </div>

                <Button
                  className="w-full text-base leading-[100%] font-semibold px-5 py-6 rounded-[0.5rem]"
                  type="submit"
                >
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
