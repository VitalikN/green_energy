import Head from "next/head";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MainCompany from "@/components/MainCompany";
import Electricity from "@/components/Electricity";
import Cases from "@/components/Cases";
import Questions from "@/components/Questions";
import Contact from "@/components/Contact";

import { firaSans } from "../utils/fonts";
import styles from "@/sass/layouts/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>ecosolution GREENERGY FOR LIFE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Group.png" />
      </Head>

      <Header />
      <main className={`${styles.main} ${firaSans.className}`}>
        <Hero />
        <MainCompany />
        <Electricity />
        <Cases />
        <Questions />
        <Contact />
      </main>
    </>
  );
}
