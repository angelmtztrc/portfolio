import Icon from '@mdi/react';
import { mdiGithub, mdiOpenInNew } from '@mdi/js';
const ProjectPreview = () => {
  return (
    <article className="grid grid-cols-2">
      <div className="col-span-1 ml-16">
        <img
          className="w-full object-cover"
          src="https://images.unsplash.com/photo-1557599443-2071a2df9c19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1382&q=80"
        />
      </div>
      <div className="col-span-1 -ml-16 pr-16 py-6">
        <div className="p-6 w-full h-full bg-gray-100 border border-blue-200 shadow-lg">
          <div className="flex items-center">
            <p className="text-gray-900 font-sans text-xl font-bold">
              MERNTask Project
            </p>
            <div className="flex items-center ml-4 space-x-2">
              <a href="#">
                <Icon className="w-5 h-5" path={mdiGithub} />
              </a>
              <a href="#">
                <Icon className="w-5 h-5" path={mdiOpenInNew} />
              </a>
            </div>
          </div>
          <p className="mt-4 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quo culpa magni molestias molestiae architecto quaerat provident
            explicabo perferendis rerum labore laudantium atque, fugiat autem
            consectetur. In atque expedita quos?
          </p>
          <ul className="flex items-center mt-3 text-blue-500 text-sm space-x-4">
            <li>JavaScript</li>
            <li>NodeJS</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ProjectPreview;
