import 'twin.macro';

const BlogCard = () => {
    return (
        <div tw="w-full md:max-w-sm shadow-md rounded-md">
            <img
                tw="h-48 w-full object-cover rounded-t-md"
                src="https://w.wallhaven.cc/full/ey/wallhaven-eykryl.png"
            />
            <div tw="p-6 leading-normal">
                <div tw="mb-5">
                    <a tw="text-lg font-semibold mb-2 inline-block">
                        Coffee the true power of a developer?
                    </a>
                    <p tw="text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>
                <div tw="flex items-center justify-end">
                    <div tw="bg-gray-900 text-white px-4 py-2 rounded-full">
                        #react
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
