var adminData = require('../model/adminData.model')

exports.addData = async (req, res) => {
    try {
        const { price, details } = req.body;
        const image = req.file.filename;
        console.log(price, details, image);
        const adminDatas = new adminData({
            price: price,
            image: image,
            details: details
        });
        const admin = await adminDatas.save();
        return res.redirect('/admin/add_data');
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

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
                return res.render('getData',
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