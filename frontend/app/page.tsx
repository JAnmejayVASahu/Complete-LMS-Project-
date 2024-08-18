"use client";

import { FC, useState } from "react";
import Heading from "./utils/heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeIteam, setActiveIteam] = useState(0);
  const [route, setRoute] = useState("Login");
  return (
    <div>
      <Heading
        title="Sticky Learning"
        description="Unlock Knowledge Anytime, Anywhere – Empower Your Future with Our Sticky Learning🤗!"
        keywords="MERN Stack, LeetCode Questions"
      />
      <Header open={open} setOpen={setOpen} activeIteam={activeIteam} setRoute = {setRoute} route = {route}/>
      <Hero />
    </div>
  );
};

export default Page;
