export const login = async (data) => {
    let url = `http://localhost:3000/api/auth/login`;
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
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