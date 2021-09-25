export const Footer = ({}: FooterProps) => {
  return (
    <footer className="container">
      <div className="flex justify-center py-4">
        <p className="text-cadet-grey font-body">
          Made with ❤ by{' '}
          <a
            className="text-medium-state-blue hover:underline"
            href="https://github.com/angel-codes"
          >
            Angel Martinez
          </a>{' '}
          &copy; 2021
        </p>
      </div>
    </footer>
  );
};

type FooterProps = {};
