export const getDetails = async (id) => {
    const response = await fetch(`https://endgame-task-project-server.vercel.app/${id}`);
    const result = await response.json();
    return result;

}