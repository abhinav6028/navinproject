
export default async function getData(params: any) {

    const { API } = params;

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiaGkiLCJyb2xlIjoiYWRtaW4iLCJmaXJtX2lkIjoyMiwiaWQiOjIzLCJpYXQiOjE2ODYxMTc5NjUsImV4cCI6MTY5Mzg5Mzk2NX0.4Z-nQNySQI4KephYLN0PKzI2oQ_9QDDk4Fj_yhTgfHo"

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const res = await fetch(`https://apierp.oyvaa.com/product`, { headers });

    return res.json();

}