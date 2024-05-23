import { useState } from "react";
import Button from "../../../components/Button";

export default function ExportCopyJsonBtn(data) {
    const [copied, setCopied] = useState(false)
    
    const handleClickCopy = () => {
        // Extracción y limpieza de datos
        const transformData = (data) => {
            // Ajusta esto según la estructura exacta de tus datos
            const extractedData = data.data;
            // Si es necesario, recorre y limpia el contenido

            return JSON.stringify(extractedData);
        };

        const transformedData = transformData(data);

        // Copiar el JSON transformado y limpio al portapapeles
        navigator.clipboard.writeText(transformedData);

        // Actualizar el estado a "copied"
        setCopied(true);

        // Volver a poner el estado en false después de 300ms
        setTimeout(() => {
            setCopied(false);
        }, 300);
    };
    return (
        <Button className="bg-green-500" onClick={handleClickCopy}>{copied ? "Copied!" : "Copy Blog JSON"}</Button>
    )
}