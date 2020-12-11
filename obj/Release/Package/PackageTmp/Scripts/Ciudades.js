document.getElementById('Id_Dep').addEventListener('change', function () {
    var Cod_Dep = this.value;
    //alert("El código del departamento es: " + Cod_Dep);
    $.get("/Clientes/GetListCiu", { Cod_Dep }, function (datos) {
        $("#Cod_Ciu ").empty(),
            $.each(datos, function (Create, row) {
                $("#Cod_Ciu ").append("<option value='"+ row.Id_Ciu+"'>"+ row.Nom_Ciu +"</option>")
            });
    });
});