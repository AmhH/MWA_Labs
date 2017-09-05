window.onload = function () {
    const items = Array.from(document.querySelectorAll('[date-time]'));
    const result = items.filter(i => i.textContent.indexOf('ECMA6') != -1)
                           .map(i => i.getAttribute('date-time'))
                           .map(i => { let time = i.split(":")
                                       return time[0]*60 + parseInt(time[1]);
                            })
                           .reduce((i, j) => i + j, 0);
    console.log("Question 1: " + result);
}