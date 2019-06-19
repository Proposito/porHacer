

const argv = require('yargs')
                .command('crear', 'Crea un elemento por hacer', { 
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        desc: 'Descripcion de la tarea por hacer'
                    }
                 
                })
                .command('actualizar', 'Actualiza el estado completado a una tarea', {
                    descripcion: {
                        demand:true,
                        alias: 'd',
                        desc: 'Descripcion de la tarea por hacer'
                    },
                    completado: {
                        alias: 'c',
                        default: true,
                        desc: 'Descripcion de la tarea por hacer'
                    }
                })
                .command('borrar', 'borra un elemento por hacer', { 
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        desc: 'Descripcion de la tarea por hacer'
                    }
                 
                })
                .help()
                .argv;












module.exports= {
    argv
}