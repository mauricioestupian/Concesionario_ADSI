using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using System.ComponentModel;
using Consesionario.Models.ViewModels;

namespace Consesionario.Controllers
{
    public class ClientesController : Controller
    {
        private ConsesionarioTablas db = new ConsesionarioTablas();

        // GET: Clientes
        public ActionResult Index()
        {
            return View(db.Clientes.ToList());
        }

        // GET: Clientes/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Clientes clientes = db.Clientes.Find(id);
            if (clientes == null)
            {
                return HttpNotFound();
            }
            return View(clientes);
        }

        // GET: Clientes/Create
        public ActionResult Create()
        {
            //Lista departamento
            /*List<Depmodels> lista =
                (from dep in db.Departamento select new Depmodels
                 {
                     id = dep.Id_Dep,
                     Nombre = dep.Nom_Dep
                 }).ToList();

            List<SelectListItem> items = lista.ConvertAll(dep =>
            {
                return new SelectListItem()
                {
                    Text = dep.Nombre.ToString(),
                    Value = dep.id.ToString(),
                    Selected = false
                };
            });

            ViewBag.items = items;*/
            List<Departamento> ListaDep = db.Departamento.ToList();
            ViewBag.ListaDep = new SelectList(ListaDep, "Id_Dep", "Nom_Dep");
            return View();
        }

        // POST: Clientes/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "id,Nom_Cli,Ape_Cli,Doc_Cli,Tel_Cli,Correo,fecha_crea,Cod_Ciu")] Clientes clientes)
        {

            if (ModelState.IsValid)
            {
                db.Clientes.Add(clientes);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View();
        }

        // GET: Clientes/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Clientes clientes = db.Clientes.Find(id);
            if (clientes == null)
            {
                return HttpNotFound();
            }
            return View(clientes);
        }

        // POST: Clientes/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "id,Nom_Cli,Ape_Cli,Doc_Cli,Tel_Cli,Correo,fecha_crea,Cod_Ciu")] Clientes clientes)
        {
            if (ModelState.IsValid)
            {
                db.Entry(clientes).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(clientes);
        }

        // GET: Clientes/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Clientes clientes = db.Clientes.Find(id);
            if (clientes == null)
            {
                return HttpNotFound();
            }
            return View(clientes);
        }

        // POST: Clientes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Clientes clientes = db.Clientes.Find(id);
            db.Clientes.Remove(clientes);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        public JsonResult GetListCiu(int Cod_Dep)
        {
            db.Configuration.ProxyCreationEnabled = false;
            List<Ciudad> ListCiu = db.Ciudad.Where(c => c.Cod_Dep == Cod_Dep).ToList();
            return Json(ListCiu, JsonRequestBehavior.AllowGet);
        }
    }
}
