const Transaction = require('../Models/Transaction')
// Get Transactions
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            sucess: true,
            count: transactions.length,
            data: transactions 
        })
    } catch (err) {
        return res.status(500).json({
            sucess: false,
            error: 'Server Error'
        });
    }
}

// Add Transactions
exports.addTransaction = async (req, res, next) => {
    try {
        const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
        sucess: true,
        data: transaction
    }) 
    } catch (err) {
        if(err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            
            return res.status(400).json({
                sucess: false,
                error: messages
            });
    } else {
        return res.status(500).json({
            sucess: false,
            error: 'Server Error'
        });
    }
}
   
};

// Delete Transactions
exports.deleteTransaction = async (req, res, next) => {
    try {
       const transaction = await Transaction.findById(req.params.id);
       
       if(!transaction) {
           return res.status(404).json({
               sucess: false,
               error:'Transaction Not Found'
           })
       }

       await transaction.remove();

       return res.status(200).json({
           sucess: true,
           data: {}
       })
    } catch (err) {
        return res.status(500).json({
            sucess: false,
            error: 'Server Error'
        }); 
    }
}
