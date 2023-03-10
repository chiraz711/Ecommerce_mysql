const {connection}= require("../databaseconfig/config")
module.exports = {
    addProduct:((req,res)=>{
        const query=`INSERT INTO product(name,category,price,description,quantity,image) VALUES ("${req.body.name}","${req.body.category}","${req.body.price}","${req.body.description}","${req.body.quantity}","${req.body.image}")`
        connection.query(query,(error,result)=>{
            error? res.status(500).send(error)
            :res.status(200).send("done")
        })
    }),
    getProduct:((req,res)=>{
        const query = `SELECT * FROM product`
        connection.query(query,(error,result)=>{
            error? res.status(500).send(error)
            :res.status(200).send(result)
    })

}),
    updateProduct:((req,res)=>{
        const query=`UPDATE product SET name="${req.body.name}",category="${req.body.category}" ,price="${req.body.price}",description="${req.body.description}",quantity="${req.body.quantity}",image="${req.body.image}" WHERE id=${req.params.id} `
        connection.query(query,(error,result)=>{
            error? res.status(500).send(error)
            :res.status(200).send("update success")
    })
    }),
    deleteProduct:((req,res)=>{
        const query=`DELETE FROM product WHERE id=${req.params.id}`
        connection.query(query,(error,result)=>{
            error? res.status(500).send(error)
            :res.status(200).send("delete success")
    })
    })
     
}
