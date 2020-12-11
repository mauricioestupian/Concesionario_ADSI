document.getElementById('Id_Dep').addEventListener('change', function () {
    var Cod_Dep = this.value;
    //alert("el valor del departamento cambio a " + Cod_Dep);
        $.get("/Clientes/GetListCiu", { Cod_Dep }, function (datos) {
            $("#Cod_Ciu").empty();
            $("#Cod_Ciu").append("<option value='0'>--Seleccione</option>")
            $.each(datos, function (Create, row) {
                $("#Cod_Ciu").append("<option value='" + row.Id_Ciu + "'>" + row.Nom_Ciu + "</option>")
            });
        });    
});

var Doc = document.getElementById('Doc_Cli');
Doc.addEventListener('keyup', (event) => {
    var inputdoc = event.path[0].value;
    //alert("cambia valor a :" + inputdoc);
    $.get("/Clientes/UserExt", { inputdoc }, function(dato) {
        if (dato== 0) {
                alert("ya esta registrado");
        }
        
    });
    
});


