import Error_message from "./Error";

export default async function PreviewFile() {

    const value =await new Promise((resolve,reject)=>{
        var file = document.getElementById("file").files;
        if (file.length > 0) {
            var fileReader = new FileReader();
            fileReader.onload =  function (event) {
                let value = JSON.parse(event.target.result);  
                resolve(value);
            }
        } else {
            let a = "Select a valid file";
            Error_message(a);
            reject("#TP@#");
        }
        fileReader.readAsBinaryString(file[0]);
    });

    return value;
}
