const router = require("express").Router();
const deliveryDrivers = require("../models/deliveryDrivers");
let driver = require("../models/deliveryDrivers");

router.route("/add").post((req, res) => {

    const age = req.body.age;
    const name = req.body.name;
    const gender = req.body.gender;
    const NIC = req.body.NIC;
    const vehinumber = req.body.vehinumber;
    const phone = req.body.phone;


    // const newDriver =  new driver ({
    //     name,
    //     age,
    //     gender
    // })

    const newDriver = new driver({
        name,
        age,
        gender,
        NIC,
        vehinumber,
        phone
    })

    newDriver.save().then(() => {
        res.json("Driver Added");
    }).catch((err) => {
        console.log(err);
    })


})

//get data//
router.route("/").get((req, res) => {

    driver.find().then((drivers) => {
        res.json(drivers)
    }).catch((err) => {
        console.log(err)
    })

})


//update data
router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const { name, age, gender,NIC, vehinumber, phone } = req.body;

    const updatedriver = {
        name,
        age,
        gender,
        NIC,
        vehinumber,
        phone
    }

    const update = await deliveryDrivers.findByIdAndUpdate(userId, updatedriver)
        .then(() => {
            res.status(200).send({ status: "User updated" })

        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Erro with updating data", error: err.message });
        })
})

//delete data

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await deliveryDrivers.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({ status: "User deleted" });

        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error wiht delete user", error: err.message });
        })
})


//one user details 
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    await deliveryDrivers.findById(userId)
        .then((driver) => {
            res.status(200).send({ status: "User fetched", driver })
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get user", erro: err.message });
        })
})


module.exports = router;
