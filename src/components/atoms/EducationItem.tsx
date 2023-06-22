const EducationItem = () => {
  return (
    <li className="flex space-x-4 rounded-lg border border-dark-900 p-4">
      <figure className="aspect-square h-full rounded bg-secondary-500" />
      <div>
        <h2 className="font-display font-bold text-white">Computer Technician</h2>
        <p className="font-body text-base font-light leading-relaxed text-greyish-800">
          CBTis 239 • 2018 - 2021
        </p>
      </div>
    </li>
  );
};

export default EducationItem;
