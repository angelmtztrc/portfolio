import { Tab } from '@headlessui/react';

const ProjectsPanel = ({}: ProjectsPanelProps) => {
  return (
    <Tab.Panel as="section" className="rounded-lg border border-raisin-black bg-eerie-black p-4">
      <h2 className="font-display text-3xl font-extrabold text-white">Projects</h2>
      <ul className="mt-4 grid grid-cols-3 gap-4">
        <li className="col-span-1">
          <article className="rounded-lg border border-raisin-black px-4 py-4">
            <figure>
              <img
                className="rounded-lg"
                src="https://images.unsplash.com/photo-1602193230480-7840a38eb0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              />
            </figure>
            <div className="mt-2">
              <h3 className="font-display text-xl font-bold text-white">Passgen - Deno</h3>
              <p className="mt-1 font-body text-base font-light text-cadet-grey-light">
                A command-line tool built with Deno and TypeScript that allows you to generate
                random and secure passwords.
              </p>
            </div>
          </article>
        </li>
      </ul>
    </Tab.Panel>
  );
};

type ProjectsPanelProps = {};

export default ProjectsPanel;
