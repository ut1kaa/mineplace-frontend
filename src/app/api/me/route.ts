import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: Request) {
    try {
        const authHeader = req.headers.get("Authorization");

        if (!authHeader) {
            return NextResponse.json({ error: "Токен авторизации отсутствует" }, { status: 401 });
        }

        const response = await axios.get("http://127.0.0.1:8000/api/v1/me", {
            headers: {
                Authorization: authHeader,
            },
        });

        return NextResponse.json(response.data);

    } catch (error: any) {
        let errorMessage = "Не удалось получить информацию о пользователе.";
        let statusCode = 500;

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
            statusCode = 400;
        }

        console.error("Ошибка при получении информации о пользователе:", errorMessage);
        return NextResponse.json({ error: errorMessage }, { status: statusCode });
    }
}