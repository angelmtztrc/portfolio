'use client';

const ErrorPage = () => {
  // TODO: make this better
  return (
    <div className="rounded-lg border border-dark-900 bg-darken-900 p-5">
      <div className="flex w-full justify-center py-10">
        <p className="rounded-lg bg-red-500 bg-opacity-10 px-4 py-1 font-body text-lg font-light uppercase text-red-400">
          Something went wrong...
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
