import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @keyframes blink {
        0% {
            opacity: 1;
        }

        50% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @keyframes floating {
        0% {
            transform: translateY(0);
        }

        100% {
            transform: translateY(20px);
        }
    }

    :root {
        /* Fonts */
        --font-primary: "Rubik", sans-serif;

        /* Colors */
        --color-primary: #ffffff;
        --color-success: #34c759;
        --color-alert: #ff3b30;
        --color-info: #ff00a8;
        --color-info-secondary: #623cb4;
        --color-gray-100: #b9b8b8;
        --color-gray-200: #a8acb3;
        --color-gray-300: #85878f;
        --color-black-50: #1a2447;
        --color-black-100: #202024;
        --color-black-200: #221a2e;
        --color-black-300: #1a132f;
        --color-black-400: #120d20;
        --color-black-500: #0a0112;

        /* Gradients */
        --gradient-primary: radial-gradient(
                50% 50% at 50% 50%,
                rgba(47, 43, 255, 0.12) 0%,
                rgba(75, 2, 132, 0.12) 100%
            );

        /* Shadows */
        --shadow-primary: 0 10px 14px rgba(127, 26, 255, 0.16);

        /* Sizes */
        --container-width: 1170px;
        --container-half-padding: 15px;
        --gradient-bg-width: 700px;
        --gradient-bg-medium-height: 950px;
        --gradient-bg-small-height: 480px;
        --gradient-bg-large-height: 1600px;

        /* Animations */
        --animation-blink: blink;
        --animation-floating: floating;
        --transition-move: transform 0.1s;

        /* Miscellaneous */
        --max-z-index: 20;
    }

    body {
        font-family: var(--font-primary);
        font-weight: 400;
        color: var(--color-primary);
        background-color: var(--color-black-500);
    }

    .o-hidden {
        overflow: hidden;
    }

    .lock-scroll-y {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow-y: scroll;
    }

    @media (hover: hover) and (pointer: fine) {
        .scrollbar {
            --border-radius: 5px;
        }

        .scrollbar::-webkit-scrollbar {
            width: 10px;
            height: 10px;
        }

        .scrollbar::-webkit-scrollbar-track {
            background: linear-gradient(90deg, rgba(91, 60, 180, 0.2) 0%, rgba(98, 60, 180, 0.2) 100%);
            border-radius: var(--border-radius);
        }

        .scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(90deg, #5b3cb4 0%, #623cb4 100%);
            border-radius: var(--border-radius);
        }

        .scrollbar::-webkit-scrollbar-thumb:hover {
            background: var(--gradient-primary);
        }
    }
`;

export default GlobalStyle;
