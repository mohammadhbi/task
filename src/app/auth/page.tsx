"use client";
import axios from "axios";
import React, { useState } from "react";
import styles from "../components/styles/authPage.module.scss";
import { Button } from "../components/UI/Button";
import { InputNum } from "../components/UI/InputNum";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
type Form = {
  phone: string;
  
};

const schema = yup.object({
  phone: yup
    .string()
    .required("Phone number is required")
    .max(11)
    .min(11)
    .matches(/^09\d{9}$/, "phone number must be start with 09"),
});

export default function Authpage() {
  const router = useRouter();
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
  })
  const [username, setUsername] = useState<string | undefined>();
 const {setUser} = useUser();
  const onSubmit = async () => {
    try {
      const res = await axios.get(
        "https://randomuser.me/api/?results=1&nat=us"
      );
      const user = res.data.results[0];
      console.log(user);
      setUsername(user);
      localStorage.setItem("username", user);
      const userdata = {
        name: user.name.first,
        email:user.email,
        picture: user.picture.large
      }
      setUser(userdata);
      toast.success("logged in successfully");
     router.push("/dashboard");
    } catch (error) {
      console.error("something went wrong", error);
      toast.error("something went wrong");
    }
  };
 
  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <InputNum {...register("phone")} />
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
        <Button type="submit">Login </Button>
      </form>
    </main>
  );
}
