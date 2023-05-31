import useMediaQuery from "./useMediaQuery";

const useIsMobile = (): boolean => {
    return useMediaQuery("(max-width: 640px)")
};

export default useIsMobile;