const Router = require("express").Router()
const ExpenseTrackerModel = require("../Models/Model")



// reading an item 
Router.route("/").get(

    (req, res) => {
        ExpenseTrackerModel.find()
            .then(
                (allExpenses) => { res.json(allExpenses) }
            )
            .catch(
                (error) => { console.log(error.message) }
            )
    }

)

// reading an item

Router.route("/:id").get(
    (req, res) => {
        ExpenseTrackerModel.findById(req.params.id)
            .then(aSingleExpenseFromTheDatabase => res.json(aSingleExpenseFromTheDatabase))
            .catch((error) => res.json(`Error: ${error.message}`))
    }
)



// creating an item

Router.route("/create").post(
    (req, res) => {

        // get user data
        const UserInputedItem = req.body.item
        const UserInputedCost = req.body.cost


        // add it to the model
        const newUserInputToModel = new ExpenseTrackerModel({
            item: UserInputedItem,
            cost: UserInputedCost
        })

        // save it to the model
        newUserInputToModel.save()
            .then(() => res.json("Expense Saved"))
            .catch((error) => res.json(`Error: ${error.message}`))



    }
)


// updating an item 


Router.route("/update/:id").put(

    (req, res) => {


        ExpenseTrackerModel.findById(req.params.id)
            .then(
                // update it with the new info
                (expenseInDB) => {
                    expenseInDB.item = req.body.item
                    expenseInDB.cost = req.body.cost

                    // save it
                    expenseInDB.save()
                        .then(() => res.json("Expense Updated"))
                        .catch((error) => res.json(`Error: ${error.message}`))
                }
            )





    }


)


// delete an item

Router.route("/:id").delete(
    (req, res) => {
        ExpenseTrackerModel.findByIdAndDelete(req.params.id)
            .then(() => res.json("Deleted SuccessFully"))
            .catch((error) => res.json(`Error: ${error.message}`))
    }
)


module.exports = Router