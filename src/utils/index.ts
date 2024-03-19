import fetcher from "./fetcher";

const consoleDev = (...content: any) => {
    if (process.env.NODE_ENV === "development") {
        // eslint-disable-next-line no-console
        console.log(...content);
    }
};

export { consoleDev, fetcher };