const db = require('../db/Config')

//Index
const getAllDrip = async () => {
    try {
        const allDrip = await db.any('SELECT * FROM fashions')
        return allDrip
    } catch (error) {
        return error
    }
}

//Show 
const getDrip = async (id) => {
    try {
        const oneDrip = await db.any('SELECT * FROM fashions WHERE id = $1', id)
        return oneDrip
    } catch (error) {
        return {error : "ID NOT FOUND"}
    }
}

//Create 
const createDrip =  async (fashion) => {
    try {
        const newDrip = await db.one(
            'INSERT INTO fashions (name, price, img_url, img2_url, category, description, store_name, product_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [fashion.name, fashion.price, fashion.img_url, fashion.img2_url, fashion.category, fashion.description, fashion.store_name, fashion.product_url]
        )
        return newDrip
    } catch (error) {
        return error
    }
}

//Delete
const deleteDrip = async (id) => {
    try {
        const deletedDrip = await db.one('DELETE FROM fashions WHERE id=$1 RETURNING *', id)
        return deletedDrip
    } catch (error) {
        return error
    }
}

//Update
const updateDrip = async (id, fashion) => {
    try {
        const updatedDrip = await db.one(
            'UPDATE fashions SET name=$1, price=$2, img_url=$3, img2_url=$4, category=$5, description=$6, store_name=$7, product_url=$8 WHERE id=$9 RETURNING *',
            [fashion.name, fashion.price, fashion.img_url, fashion.img2_url, fashion.category, fashion.description, fashion.store_name, fashion.product_url, id]
        )
        return updatedDrip
    } catch (error) {
        return error
    }
}

module.exports = { getAllDrip, getDrip, createDrip, updateDrip, deleteDrip }