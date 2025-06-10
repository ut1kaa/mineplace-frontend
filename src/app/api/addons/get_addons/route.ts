import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const fastapiUrl = `http://127.0.0.1:8000/api/v1/addons?${new URLSearchParams(searchParams.toString())}`;
        const response = await axios.get(fastapiUrl);

        return NextResponse.json(response.data, { status: response.status });

    } catch (error: any) {
        let errorMessage = "Не удалось получить список аддонов.";
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

        console.error("Ошибка при получении аддонов (Next.js API):", errorMessage);
        return NextResponse.json({ error: errorMessage }, { status: statusCode });
    }
}