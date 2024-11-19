using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace YtAudio.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OiController : ControllerBase
    {
        [HttpGet]
        public Laranja Get()
        {
            var l = new Laranja() { Id = 2, Nome = "oi" };
            return l;
        }
    }

    public class Laranja
    {
        public int Id { get; set; }
        public string Nome { get; set; }
    }
}