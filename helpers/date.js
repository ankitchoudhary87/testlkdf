export const dataformat = (d) => {
    var oldDate = d;
    var newDate = null;
    var arrayMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var help = oldDate.split('-');
    newDate = arrayMonth[help[1] - 1] + " " + help[2] + ", " + help[0];
    return newDate;
}