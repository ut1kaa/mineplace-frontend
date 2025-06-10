import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
    try {
        const authHeader = request.headers.get("Authorization");

        if (!authHeader) {
            return NextResponse.json({ error: "Токен авторизации отсутствует" }, { status: 401 });
        }

        const response = await axios.post("http://127.0.0.1:8000/api/v1/logout", {}, {
            headers: {
                Authorization: authHeader,
            },
        });
        const res = NextResponse.json(response.data);

        return res;
    } catch (error: any) {
        console.error("Ошибка при выходе:", error);
        const errorMessage = error.response?.data?.detail || error.message || "Ошибка выхода";
        return NextResponse.json({ error: errorMessage }, { status: error.response?.status || 400 });
    }
}