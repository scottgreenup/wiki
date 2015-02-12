
window.selected_card = -1;

$("#searchInput").keydown(function(e) {

    // stop these keys from doing their normal function
    var key_up = 38;
    var key_down = 40;
    var key_enter = 13;

    if (e.which == key_up 
     || e.which == key_down 
     || e.which == key_enter) {
        e.preventDefault();
    }

    var count = $(".card").length;
    var current = window.selected_card;

    // unfocus the previous card
    if (current >= 0 && current <= count) {
        var prev = $(".card:eq(" + current + ")");
        prev.toggleClass("card-focus");
    }

    if (e.which == 40) {
        current++;
    }

    if (e.which == 38) {
        current--;
    }

    // stop the focus from going past the last card
    if (current == count) {
        current--;
    }

    // focus the new card
    if (current >= 0 && current <= count) {
        var curr = $(".card:eq(" + current + ")");
        curr.toggleClass("card-focus");
    }

    // stop the focus from going out of bounds
    if (current < 0) {
        current = -1;
    }

    window.selected_card = current;
});

$("#searchInput").focus()



