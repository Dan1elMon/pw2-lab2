
function stripMeetCodeFromURL(url) {
    if(url.substring(0, 8) === "https://") {
        url = url.substring(8, url.length);
    }
    const beginsMeetCode = 16;
    const amountLettersMeetCode = 12;
    url = url.substring(beginsMeetCode, beginsMeetCode + amountLettersMeetCode);
   
    let meetCode = "";
    for(let i = 0; i < url.length; i++) {
        if(!(url[i] === "-")) {
    meetCode += url[i];
      }
    }
    return meetCode;
  } 
/*https://meet.google.com/_meet/fmn-ucgn-fdz?pli=1&authuser=2
 https://meet.google.com/fmn-ucgn-fdz
 Para unirte a la videollamada, haz clic en este enlace: https://meet.google.com/fmn-ucgn-fdz
Si quieres unirte por teléfono, llama al +51 1 6449188 e introduce este PIN: 971 648 232 2472#
Para ver más números de teléfono, haz clic en este enlace: ?pli=1&authuser=2
*/
    const urls = [
        "https://meet.google.com/fmn-ucgn-fdz",
        "meet.google.com/fmn-ucgn-fdz",
        "https://meet.google.com/fmn-ucgn-fdz?pli=1&authuser=2",
        "meet.google.com/fmn-ucgn-fdz?pli=1&authuser=2"
    ]
    const meetCodes = urls.map(url => stripMeetCodeFromURL(url));
    console.log(meetCodes);