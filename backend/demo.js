const { exec } = require("child_process");

exec(
    `g++ inp.cpp | a.exe`,
    (e, stdout, stderr) => {
        if (e instanceof Error) {
            console.error(e);
            throw e;
        }
        console.log("stdout", stdout);
        console.log("stderr", stderr);
    }
);