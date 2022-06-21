let productos = [
    { id: '1', categoria: 'piñata', nombre: 'Pinocho', precio: 400, imagen:"https://i.ibb.co/7bVBbdm/pinocho.jpg"},
    { id: '2', categoria: 'piñata', nombre: 'Pinocho', precio: 400, imagen:"https://i.ibb.co/7bVBbdm/pinocho.jpg"},
    { id: '3', categoria: 'piñata', nombre: 'Pinocho', precio: 400, imagen:"https://i.ibb.co/7bVBbdm/pinocho.jpg"},
    { id: '4', categoria: 'piñata', nombre: 'Pinocho', precio: 400, imagen:"https://i.ibb.co/7bVBbdm/pinocho.jpg"},
    { id: '5', categoria: 'manta', nombre: 'Manta Guelaguetza', precio: 200, imagen:"https://i.ibb.co/4j9HPc0/nosotros.jpg"},
    { id: '6', categoria: 'manta', nombre: 'Manta Guelaguetza', precio: 200, imagen:"https://i.ibb.co/4j9HPc0/nosotros.jpg"},
    { id: '7', categoria: 'manta', nombre: 'Manta Guelaguetza', precio: 200, imagen:"https://i.ibb.co/4j9HPc0/nosotros.jpg"},
    { id: '8', categoria: 'manta', nombre: 'Manta Guelaguetza', precio: 200, imagen:"https://i.ibb.co/4j9HPc0/nosotros.jpg"},
    
    
    
    
]

export const getFetch= ()=>{
    
    return new Promise ( (resolve, reject)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 3000)
    })
}



export const getFetchDetail= (id)=>{
    const producto = productos.find( elemento =>{
        return elemento.id === id
    })
    console.log(producto);
    return new Promise ( (resolve, reject)=>{
        setTimeout(()=>{
            resolve(producto)
        }, 1000)
        console.log(id);
    })
}
