const Header = ({}: HeaderProps) => {
  return (
    <header>
      <div className="relative z-0 h-96 w-full overflow-hidden bg-slate-500"></div>
      <section className="container">
        <div className="flex w-full justify-between">
          <div className="w-1/2">
            <div className="z-10 -mt-24 h-48 w-48 rounded-full border-4 border-medium-state-blue bg-slate-500"></div>
          </div>
          <div className="flex w-1/2 justify-end">
            <a className="mt-4">
              <button className="inline-block bg-slate-500 px-4 py-2">
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className="mt-6">
          <h1 className="font-display text-4xl font-bold text-white">
            Angel Martinez{' '}
            <span className="block font-body text-base font-light text-cadet-grey">
              @angelmtztrc
            </span>
          </h1>
          <div className="mt-4">
            <p className="font-body font-light text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ut,
              dolorum ipsam laudantium animi voluptas dignissimos dolore itaque
              repellat doloremque atque earum eveniet iste consequuntur
              molestias voluptate, nulla, expedita quaerat!
            </p>
            <ul className="mt-4 flex space-x-4">
              <li className="text-white">icon</li>
              <li className="text-white">icon</li>
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
};

type HeaderProps = {};

export default Header;
