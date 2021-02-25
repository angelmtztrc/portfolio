export type AboutMeProps = {};

const AboutMe = () => {
  return (
    <div className="grid gap-10 grid-cols-2 mt-24">
      <div className="w-full">
        <img
          className="w-full object-fill"
          src="https://images.unsplash.com/photo-1592685258314-73731368acd6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80"
          alt="some picture"
        />
      </div>
      <div className="font-sans">
        <h3 className="text-gray-900 text-xl">
          About <span className="font-bold">Me</span>
        </h3>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          doloremque atque nobis, voluptas illum praesentium beatae natus
          eligendi ducimus explicabo minima velit facilis veritatis ratione id
          mollitia odit. Minus, alias.
        </p>
        <div>
          <button>Hire</button>
          <button>Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
