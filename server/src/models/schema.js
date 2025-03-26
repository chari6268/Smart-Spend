const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Expense Schema
const expenseSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    monthYear: { type: String, required: true },
    monthNumber: { type: Number, required: true },
    tables: [{
        tableName: { type: String, required: true },
        columns: [{ type: String }],
        rows: [{
            date: { type: String, required: true },
            name: { type: String, required: true },
            amount: { type: Number, required: true },
        }],
    }],
    calculations: {
        totalIncome: { type: Number, default: 0 },
        totalExpense: { type: Number, default: 0 },
        currentAmount: { type: Number, default: 0 }
    }
}, {
    timestamps: true // Optional: automatically adds createdAt and updatedAt fields
});

// Models export
const models = {
    Users: mongoose.model('User', userSchema),
    Expense: mongoose.model('Expense', expenseSchema),
};

module.exports = models;
