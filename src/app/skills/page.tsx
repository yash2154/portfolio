import Link from "next/link";
import frontendimg from "@/app/assets/frontend.png";
import backendimg from "@/app/assets/backend.png";
import databaseimg from "@/app/assets/database.webp";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="bg-zinc-950 h-[240vh] md:h-[79vh] w-full ">
      <div className="flex flex-col md:flex-row  justify-center md:gap-5 md:p-5 gap-20 mt-10 items-center ">
        <div className="card bg-base-100 w-80 md:w-96 h-[30rem] md:h-[28rem] shadow-2xl">
          <figure>
            <Image src={frontendimg} alt="frontend" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Frontend Development</h2>
            <p>HTML, CSS, JavaScript, ReactJS, NextJS, Redux</p>
          </div>
        </div>
        <div className="card bg-base-100 w-80 md:w-96  h-[30rem]  md:h-[28rem] shadow-2xl">
          <figure>
            <Image src={backendimg} alt="backend" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Backend Development</h2>
            <p>Python, NodeJS, FastAPI, ExpressJS, C++</p>
          </div>
        </div>
        <div className="card bg-base-100 w-80 md:w-96  h-[30rem]  md:h-[28rem] shadow-2xl">
          <figure>
            <Image src={databaseimg} alt="database" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Database and Version control</h2>
            <p>Git, Github, MongoDB, MySQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}
