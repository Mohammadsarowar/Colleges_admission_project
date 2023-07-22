export const getDetails = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const result = await response.json();
    return result;

}