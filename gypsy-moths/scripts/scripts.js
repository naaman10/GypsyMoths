$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$.material.init()

$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})

$(function () {
    $('[data-toggle="popover"]').popover()
})

$(".select").dropdown({
    "autoinit": ".select"
});