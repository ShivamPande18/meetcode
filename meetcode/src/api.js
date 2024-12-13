import axios from "axios";
import { cppPreCode } from "./Pages/cppPreCode"
// import { LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston",
});


export const executeCode = async (language, sourceCode, ind) => {
    const response = await API.post("/execute", {
        language: language,
        version: "10.2.0",
        files: [
            {
                content: cppPreCode[ind] + sourceCode,
            },
        ],
    });
    return response.data;
};


// export const executeCode = async (language, sourceCode) => {
//     const response = await API.post("/execute", {
//         language: language,
//         version: "18.15.0",
//         files: [
//             {
//                 content: sourceCode,
//             },
//         ],
//     });
//     return response.data;
// };