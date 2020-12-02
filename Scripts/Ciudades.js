$(document).ready(function () {

    $("#Id_Dep").change(function () {
        var value = $("#Id_Dep option:selected").val();

        if (value !== "" || value !== undefined) {
            ListadoCiudades(Value);
        }
    })

})

function ListadoCiudades(Value) {

    var url
}

