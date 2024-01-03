export const getEnvVariable = (variableName) => {
    console.log(process.env.JWT_SECRET);
    return process.env.JWT_SECRET;
};