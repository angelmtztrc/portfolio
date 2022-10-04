const SocialMediaList = () => {
  return (
    <section className="rounded-lg border border-dark-900 bg-darken-900 p-5 ">
      <div className="flex items-center justify-center space-x-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="h-10 w-10 rounded-full bg-secondary-500" />
        ))}
      </div>
    </section>
  );
};

export default SocialMediaList;
