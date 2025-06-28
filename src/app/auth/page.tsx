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

export default function page() {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
  })
  const [username, setUsername] = useState();
  const onSubmit = async () => {
    try {
      const res = await axios.get(
        "https://randomuser.me/api/?results=1&nat=us"
      );
      const user = res.data.results[0].name.first;
      setUsername(user);
      localStorage.setItem("username", user);
      toast.success("logged in successfully");
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("something went wrong", error);
      toast.error("something went wrong");
    }
  };
 
  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit(onSubmit)}>
      <InputNum {...register("phone")} />
       {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
      <Button type="submit">Login </Button>
      </form>
    </main>
  );
}
