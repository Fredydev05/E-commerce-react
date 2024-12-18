import data from '../data/productos.json';

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 500)
    })
}


export const pedirItem = (id) => {
    return new Promise ((resolve, reject) => {

        const item = data.find((el) => el.id === id);

        if(item){
            resolve(item);
        }else{
            reject({error: "item no detectado"})
        }

    })
}