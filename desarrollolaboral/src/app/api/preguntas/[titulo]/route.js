import { NextResponse } from "next/server";
import tecnologias from "@/app/api/tecnologias.json"

export async function GET(request, {params}){
    const data = await tecnologias.Tecnologias.find(tecnologia => tecnologia.Titulo === params.titulo);
    return NextResponse.json(data.PreguntasRespuestas)
}