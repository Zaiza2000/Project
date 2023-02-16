const Order = require("../models/Order.js");

exports.listOrder = async (req, res) => {
    try{
        const order = await Order.findAll();
        res.json(order);

    } catch(err){
        console.log(err);
        res.status(500).send("listOrder Server Error")
    }
};

exports.getOrderbyUser = async (req, res) => {
    try{
        const order = await Order.findAll({
            where: {id : rep.body.id}
        });
        res.json(order);
    } catch(err){
        console.log(err);
        res.status(500).send("listOrder Server Error")
    }
};
exports.getOrder = async (req, res) => {
    try{
        const order = await Order.findAll({
            where: {order_id : rep.params.id}
        });
        res.json(order[0]);
    } catch(err){
        console.log(err);
        res.status(500).send("listOrder Server Error")
    }
};

exports.CreateOrder = async (req, res) => {
    try{
        await Order.create(req.body)
    res.json({
        message : 'Order created successfully'
    })
    }catch (err){
        console.log(err);
        res.status(500).send("==CreateOrder Server Error==");
    }
};