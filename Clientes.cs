//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------


namespace Consesionario
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Linq;

    public partial class Clientes
    {

        public int id { get; set; }
        public string Nom_Cli { get; set; }
        public string Ape_Cli { get; set; }
        public string Doc_Cli { get; set; }
        public string Tel_Cli { get; set; }
        public string Correo { get; set; }
        public Nullable<System.DateTime> fecha_crea { get; set; }
        public int Cod_Ciu { get; set; }
    }
}
