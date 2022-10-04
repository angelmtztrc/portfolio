const Menu = () => {
  return (
    <nav className="flex gap-4 rounded-lg border border-dark-900 bg-darken-900 p-5">
      <button
        type="button"
        className="rounded-lg bg-primary-500 px-6 py-3 font-body text-sm font-bold uppercase text-white"
      >
        Projects
      </button>
      <button
        type="button"
        className="rounded-lg bg-darken-900 px-6 py-3 font-body text-sm font-bold uppercase text-greyish-900"
      >
        Blog
      </button>
    </nav>
  );
};

export default Menu;
