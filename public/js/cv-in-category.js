console.log($("#close"))

$("button#close").on('click', () => {
    const temp = $(".custom-dropdown-menu");

    console.log($("button#close").parent);
});