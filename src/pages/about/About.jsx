import React from "react";
import Container from "../../components/container/Container";
const About = () => {
  return (
    <Container>
      <div className="pt-20 pb-10 text-center px-5 lg:px-0 overflow-hidden">
        <div>
          <h2 className="text-center font-primary text-5xl">About Us</h2>
          <p className="pt-14 tracking-wider text-[28px] font-semibold font-primary">
            Welcome to Task, where you manage your tasks!
          </p>
          <p className="pt-6 tracking-wider lg:w-4/6 mx-auto ">
            At Task, we're more than just a task management website. We're your
            trusted partner in making your life easier, creating memorable
            milestone, to achieve your goals.
          </p>
          <p className="pt-14 tracking-wider text-2xl font-semibold font-primary">
            Our Users
          </p>
          <p className="pt-6 tracking-wider lg:w-4/6 mx-auto ">
            <div className="flex flex-wrap items-center gap-5 font-bold lg:gap-8 justify-center text-[white] mt-8">
              <div className="bg-[red] flex justify-center hover:scale-125 transition-all px-3 h-14 items-center rounded-xl">
                <p>Doctors</p>
              </div>
              <div className="bg-[green] flex justify-center hover:scale-125 transition-all px-3 h-14 items-center rounded-xl">
                <p>Engineering</p>
              </div>
              <div className="bg-[#dddd3d] flex justify-center hover:scale-125 transition-all px-3 h-14 items-center rounded-xl">
                <p>Students</p>
              </div>
              <div className="bg-[blue] flex justify-center hover:scale-125 transition-all px-3 h-14 items-center rounded-xl">
                <p>Teachers</p>
              </div>
              <div className="bg-[#75d6e2] flex justify-center hover:scale-125 transition-all px-3 h-14 items-center rounded-xl">
                <p>Developers</p>
              </div>
            </div>
          </p>
          <p className="pt-14 tracking-wider text-2xl font-semibold font-primary">
            Our Story
          </p>
          <p className="pt-6 tracking-wider lg:w-4/6 mx-auto ">
            Our journey began with a simple idea to provide users with an
            efficient and organized platform for managing tasks. We strive to
            make every moment spent on Task comfortable and productive. The
            founders, passionate about productivity, envisioned a platform that
            offers a diverse set of features, each designed to provide a
            seamless, unique, and personalized task management experience for
            every user.
          </p>
          <p className="pt-14 tracking-wider text-2xl font-semibold font-primary">
            Our Mission
          </p>
          <p className="pt-6 tracking-wider lg:w-4/6 mx-auto ">
            Task's mission is to connect users with an exceptional task
            management experience, making their work as enjoyable and efficient
            as possible. We aim to create a world where managing tasks isn't
            just a routine, but an integral part of a productive work
            experience. Our commitment is to make every user feel valued,
            ensuring they have a seamless journey in managing their tasks.
          </p>
        </div>
        <div className="flex flex-col  md:flex-row-reverse gap-10  mt-20 lg:w-4/6 mx-auto justify-between items-center">
          <div className="flex-1 relative">
            <img src="https://i.ibb.co/HhRLFhZ/techteam.jpg" alt="" />
            <div className="bg-black opacity-30 h-full w-full absolute top-0 left-0"></div>
          </div>
          <div className="flex-1 text-justify">
            <p className=" tracking-wider text-2xl font-semibold font-primary">
              Tech team
            </p>
            <p className="pt-6 tracking-wider mx-auto ">
              Task is powered by a dedicated team of task management enthusiasts
              who work tirelessly to ensure that your experience is smooth and
              enjoyable. From our customer support team to our tech wizards,
              we're here to assist you at every step of your task management
              journey.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row lg:w-4/6 mx-auto gap-10 mt-20 justify-between items-center">
          <div className="flex-1 relative ">
            <img src="https://i.ibb.co/JvcVqkc/management.jpg" alt="" />
            <div className="bg-black opacity-30 h-full w-full absolute top-0 left-0"></div>
          </div>
          <div className="flex-1 text-left md:text-right">
            <p className="tracking-wider text-2xl font-semibold font-primary">
              Management
            </p>
            <p className="pt-6 tracking-wider  mx-auto text-justify">
              Our management team brings a wealth of experience in the task
              management industry. They ensure that our platform is secure,
              reliable, and continuously improving to meet your evolving needs.
              We're here to make your task management exceptional, so you can
              focus on achieving your goals. Explore, organize, and succeed with
              Task!
            </p>
          </div>
        </div>

        <div className="lg:w-4/6 mx-auto mt-16">
          <h2 className=" font-primary mt-20 text-2xl lg:text-4xl">
            Thank You!
          </h2>
          <p className="pt-6 w-5/6 tracking-wider text-sm mx-auto text-center mb-10 sm:mb-0">
            We're here to make your task management exceptional, so you can
            focus on achieving your goals. Explore, organize, and succeed with
            Task!
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
