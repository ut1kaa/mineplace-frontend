import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
    try {
        const authHeader = req.headers.get("Authorization");

        if (!authHeader) {
            return NextResponse.json({ error: "Токен авторизации отсутствует" }, { status: 401 });
        }

        const data = await req.json();
        const response = await axios.post("http://127.0.0.1:8000/api/v1/addons", data, {
            headers: {
                Authorization: authHeader,
            },
        });
        return NextResponse.json(response.data);
    } catch (error: any) {
        let errorMessage = "Ошибка создания домена";
        let statusCode = 400;

        if (axios.isAxiosError(error) && error.response) {
            statusCode = error.response.status;

            if (error.response.data && error.response.data.detail) {
                errorMessage = error.response.data.detail;
            } else if (error.response.data) {
                errorMessage = JSON.stringify(error.response.data);
            } else {
                errorMessage = error.message;
            }
        } else {
            errorMessage = error.message || "Произошла неизвестная ошибка.";
        }
        
        console.error("Ошибка создания домена:", errorMessage);
        
        return NextResponse.json({ error: errorMessage }, { status: statusCode });
    }
}