export const encriptedMessages = async () => {
    let url = `http://localhost:3000/api/message`;
    const res = await fetch(url, {
        method: "GET",
    });
    const resJson = await res.json();
    return resJson;
}