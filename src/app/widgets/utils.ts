export const dealy = async (duration: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
};
