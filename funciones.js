const $btnGenerar = document.getElementById('btnGenerar');
        const $NumEmp = document.getElementById('lblNumEmp');
        const $NomEmp = document.getElementById('lblNomEmp');
        const $Super = document.getElementById('dwSupervisor');
        const $Resultado = document.getElementById('lblResultado');
        let texto;
        function func1(){
            texto='<p>Buenos días / tardes </p> <br> <p>comparto la siguiente incidencia</p><br><p>At: </p>'+$NumEmp+' '+$NomEmp+'<br> Supervisor: '+$Super;
           $Resultado.outerHTML=texto;
        }
        
        //evento del botón
        btnGenerar.addEventListener('click', func1)