$("#weekly-schedule").dayScheduleSelector({
    days: [0, 1, 2, 3, 4, 5, 6],
    stringDays  : [
        chrome.i18n.getMessage("shortSunday"),
        chrome.i18n.getMessage("shortMonday"),
        chrome.i18n.getMessage("shortTuesday"),
        chrome.i18n.getMessage("shortWednesday"),
        chrome.i18n.getMessage("shortThursday"),
        chrome.i18n.getMessage("shortFriday"),
        chrome.i18n.getMessage("shortSaturday")
    ],

    startTime: '00:00',
    endTime: '23:59',
    interval: 60
  });
  
$("#resetSchedule").click(function(){
    $("#weekly-schedule").data('artsy.dayScheduleSelector').clear();
    $("#weekly-schedule").data('artsy.dayScheduleSelector').deserialize({
        0:[["06:00","23:00"]],
        1:[["06:00","23:00"]],
        2:[["06:00","23:00"]],
        3:[["06:00","23:00"]],
        4:[["06:00","23:00"]],
        5:[["06:00","23:00"]],
        6:[["06:00","23:00"]]
});
});

$("#clearSchedule").click(function(){
    $("#weekly-schedule").data('artsy.dayScheduleSelector').clear();
});

$("#randomizeSchedule").click(function(){
    $("#weekly-schedule").data('artsy.dayScheduleSelector').randomize();
});

$("#saveSchedule").click(function(){
    $("#robotscheduleplan").val(JSON.stringify($("#weekly-schedule").data('artsy.dayScheduleSelector').serialize()));
});

