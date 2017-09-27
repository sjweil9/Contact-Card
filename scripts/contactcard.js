$(document).ready(function(){
    $('form').submit(function() {
        var newdiv = "<div data-description='" + $('textarea').val() + "'><p>" + $("input[name='first_name']").val() + " " + $("input[name='last_name']").val() + "</p><button>Click me for description!</button></div>";
        $('#wrapper > div').append(newdiv);
        return false;
    });
    $(document).on('click', 'button', function() {
        var newp = "<p>" + $(this).parent().data('description') + "</p>";
        $(this).parent().append(newp);
        $(this).hide();
    });
})