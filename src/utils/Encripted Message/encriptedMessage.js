export const encriptedMessages = async () => {
    let url = `http://localhost:3000/api/message`;
    const res = await fetch(url, {
        method: "GET",
    });
    const resJson = await res.json();
    return resJson;
}

export const desencriptarMensaje = async (data) => {
    let url = `http://localhost:3000/api/message/desencrypt`;
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            id: data.id,
            secret: data.secret_key,
        }),
        headers: {
            // Authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
    });
    const resJson = await res.json();
    return resJson;
}

export const encriptarMensaje = async (data) => {
    const res = await fetch('http://localhost:3000/api/message/encrypt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const resJson = await res.json();
    return resJson;
}