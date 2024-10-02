export const registrarse = async (data) => {
    let url = `http://localhost:3000/api/auth/register`;
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            name: data.nombre,
            email: data.email,
            password: data.password,
        }),
        headers: {
            // Authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
    });
    const resJson = await res.json();
    return resJson;
}