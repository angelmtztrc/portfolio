import 'twin.macro';

const ProjectCard = () => {
    return (
        <div tw="w-full md:max-w-sm shadow-md rounded-md">
            <img
                tw="h-48 w-full object-cover rounded-t-md"
                src="https://w.wallhaven.cc/full/ym/wallhaven-ym1o3l.png"
            />
            <div tw="p-6 leading-normal">
                <div tw="mb-5">
                    <a tw="text-lg font-semibold mb-1 inline-block">
                        Real Estate landing page
                    </a>
                    <div tw="flex items-center mb-4">
                        <p tw="text-sm mr-2">#reactjs</p>
                        <p tw="text-sm mr-2">#js</p>
                        <p tw="text-sm mr-2">#html-css</p>
                    </div>
                    <p tw="text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                    </p>
                </div>
                <div tw="flex items-center justify-between">
                    <div tw="px-3 py-2 bg-gray-800 hover:bg-gray-900 transition-all ease-in duration-300 text-white">
                        Live Preview
                    </div>
                    <div tw="px-3 py-2 bg-gray-800 hover:bg-gray-900 transition-all ease-in duration-300 text-white">
                        Code
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
