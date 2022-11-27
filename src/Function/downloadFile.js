
export default function downloadFile(DataElements) {
    //Pass an array (React state)
    var today = new Date();
    const fileName = 'passwords' + today;
    const json = JSON.stringify(DataElements, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(href);

}