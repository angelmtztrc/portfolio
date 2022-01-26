export const Footer = ({}: FooterProps) => {
  return (
    <footer className="container mt-8">
      <div className="flex justify-center py-6">
        <p className="font-body text-cadet-grey">
          Made with ❤ by{' '}
          <a
            className="text-medium-state-blue hover:underline"
            href="https://github.com/angelmtztrc"
          >
            Angel Martinez
          </a>{' '}
          &copy; 2022
        </p>
      </div>
    </footer>
  );
};

type FooterProps = {};
