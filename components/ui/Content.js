import tw, { styled } from 'twin.macro';

// Styled Components
const Content = styled.main(() => [
    tw`container mx-auto px-6 md:px-10 lg:px-0`,
    `min-height: 76%;`,
    `margin-top: 2%;`,
    `margin-bottom: 2%;`,
]);

export default Content;
