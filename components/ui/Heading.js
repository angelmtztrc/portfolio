import tw, { styled } from 'twin.macro';

const Heading = styled.h1(() => [
    tw`text-4xl font-medium mb-2`,
    `font-family: 'JetBrains Mono';`,
]);

export default Heading;
