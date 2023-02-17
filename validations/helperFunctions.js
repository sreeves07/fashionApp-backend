const checkName = (req, res, next) => {
    let input = req.body.name
    input = input.trim().split(" ")
    if (input.length) {
        let newInput = input.map((word) => {
            return word[0].toUpperCase() + word.substring(1)
        }).join(" ")
        req.body.name = newInput
        next()
    } else {
      res.status(400).json({ error: "Invalid Name Input" });
    }
};

const checkCategory = (req, res, next) => {
    let input = req.body.category
    input = input.trim()
    if (input.length) {
        let newInput = input.map((word) => {
            return word[0].toUpperCase() + word.substring(1)
        })
        req.body.category = newInput
        next()
    } else {
      res.status(400).json({ error: "Invalid Category Input" });
    }
};

const checkDescription = (req, res, next) => {
    let input = req.body.description
    input = input.trim().split(" ")
    if (input.length) {
        let newInput = input.map((word) => {
            return word.charAt(0).toUpperCase()
        })
        req.body.description = newInput
        next()
    } else {
      res.status(400).json({ error: "Invalid Description Input" });
    }
};

const checkStore = (req, res, next) => {
    let input = req.body.store_name
    input = input.trim().split(" ")
    if (input.length) {
        let newInput = input.map((word) => {
            return word.charAt(0).toUpperCase()
        })
        req.body.store_name = newInput
        next()
    } else {
      res.status(400).json({ error: "Invalid Store Name" });
    }
};

const checkNumber = (req, res, next) => {
    let price = req.body.price
    if (typeof price === "number") {
        newPrice = price.toLocaleString("en-US");
        req.body.price = newPrice
        next()
    } else {
        res.status(400).json({ error: "price should be a number"})
    }
}

const checkImage = (req, res, next) => {
    let image = req.body.img_url
    let image2 = req.body.img2_url
    if (image.substring(0, 8) === "https://" || image2.substring(0, 8) === "https://"){
        next()
    } else {
        res.status(400).json({error: "Image URL starts with https://"})
    } 
}

module.exports = {checkCategory, checkDescription, checkImage, checkNumber, checkStore, checkName}