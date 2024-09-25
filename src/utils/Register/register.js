export const registrarse = async (data) => {
    let url = `http://127.0.0.1:8000/api/product`;
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password,
        }),
        headers: {
            // Authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
    });
    const resJson = await res.json();
    return resJson.data;
}