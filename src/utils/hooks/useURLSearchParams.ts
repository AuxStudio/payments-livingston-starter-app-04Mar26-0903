/**
 * Custom hook for accessing URL search parameters. This hook provides a getParam function that allows components to retrieve the value of a specific query parameter from the URL.
 */
export const useURLSearchParams = () => {
    const searchParams = new URLSearchParams(window.location.search);

    const getParam = (param: string): string | null => {
        return searchParams.get(param);
    };

    return { getParam };
};
