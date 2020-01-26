export const type = 'findResults';

const findResults = (text) => {
    return {
        type: type,
        payload: text
    };
};

export default findResults;
