/** @type {import('postcss-load-config').Config} */
const config: import("postcss-load-config").Config = {
    plugins: [require("autoprefixer"), require("postcss-nested")],
};

export default config;
