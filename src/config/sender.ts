import type{Response } from "express";
export function checkAndSend(data:any,res:Response,succsesStatus=200){
    try {
        if (typeof data=="string"){
            const splitedData = data.split("|")
            let [text,stringStatus] = splitedData
            const status = Number(stringStatus)
            if (isNaN(status) || status>599 || status<100){
                res.status(500).json(`status is wrong (for delevoper), status: ${status}`)
                return
            }
            res.status(status).json(text)
            return
        }
        
        res.status(succsesStatus).json(data)
    } catch (error) {
        res.status(500).json(String(error))
        
    }
    
}