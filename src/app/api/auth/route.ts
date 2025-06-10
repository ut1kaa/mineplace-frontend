import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const response = await axios.post("http://127.0.0.1:8000/api/v1/authorization", data);
        
        return NextResponse.json(response.data);

    } catch (error: any) {
        let errorMessage = "Ошибка авторизации";
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
        
        console.error("Ошибка авторизации:", errorMessage);
        
        return NextResponse.json({ error: errorMessage }, { status: statusCode });
    }
}