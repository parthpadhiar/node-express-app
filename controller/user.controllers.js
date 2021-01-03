var adminData = require('../model/adminData.model')


exports.getData = async (req, res) => {
    try {
        await adminData.find((err, admin) => {
            if (err) {
                return res.status(400)
                    .json({
                        status: 400,
                        data: admin,
                        message: "Failed"
                    }
                );
            } else {
                return res.render('getDataToUser',
                    {
                        data: admin
                    }
                )
            }
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.catalog = async(req, res) => {
    try {
        return res.render('userCatalog')
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}


exports.contactUs = async(req, res) => {
    try {
        return res.render('contactUs')
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}