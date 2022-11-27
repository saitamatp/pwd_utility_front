
export default function downloadFile(DataElements) {
    //Pass an array (React state)
    var today = new Date();

    var day=today.getDate();
    var month=today.getMonth()+1;
    var year=today.getFullYear();
    var hour=today.getHours();
    var min=today.getMinutes();
    var sec=today.getSeconds();

    var combine = `_${day}_${month}_${year}_${hour}_${min}_${sec}`;
    const fileName = 'passwords' + combine;
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