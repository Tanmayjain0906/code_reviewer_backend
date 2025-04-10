const aiService = require("../services/ai.service");

const getReviewController = async(req,res) => {
    const {prompt} = req.body;

    if(!prompt)
    {
        return res.send({
            status: 400,
            message: "No Prompt Available",
            success: false,
        })
    }

    try {
        const response = await aiService(prompt);
        return res.send({
            status:200,
            message: response,
            success: true,
        });
    } catch (error) {
        return res.status({
            status: 500,
            message: "Internal Server Error",
            success: false,
        })
    }
}

module.exports = getReviewController;