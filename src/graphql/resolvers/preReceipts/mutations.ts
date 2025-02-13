import { preReceipts } from "../../../db/Entities/preReceipts";

const preReceiptsMutations = {

    CREATE_PRE_RECEIPT_SUPPLEMENTARY_PAROLL_CONCEPT: async (_: any, {input}: any) => {
        const {
            idPreReceipt,
            idSupplementaryPayrollConcept,
            supplementaryPayrollConcept,
            dateSupplementaryPayrollConcept,
            idOperator,
            operator,
            idUnit,
            unit,
            licensePlates,
            rate,
            comments,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            const newRecord = await preReceipts.query("exec create_preReceiptSupplementaryPayrollConcept " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@idSupplementaryPayrollConcept = '" + idSupplementaryPayrollConcept + "', " +
                "@supplementaryPayrollConcept = '" + supplementaryPayrollConcept + "', " +
                "@dateSupplementaryPayrollConcept = '" + dateSupplementaryPayrollConcept + "', " +
                "@idOperator = '" + idOperator + "', " +
                "@operator = '" + operator + "', " +
                "@idUnit = '" + idUnit + "', " +
                "@unit = '" + unit + "', " +
                "@licensePlates = '" + licensePlates + "', " +
                "@rate = '" + rate + "', " +
                "@comments = '" + comments + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_PRE_RECEIPT_MOVEMENT: async (_: any, {input}: any) => {
        const {
            idPreReceipt,
            quantity,
            amount,
            dateMovement,
            description,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            const newRecord = await preReceipts.query("exec create_preReceiptMovement " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@quantity = '" + quantity + "', " +
                "@amount = '" + amount + "', " +
                "@dateMovement = '" + dateMovement + "', " +
                "@description = '" + description + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_PRE_RECEIPT_MOVEMENT2: async (_: any, {input}: any) => {
        const {
            idPreReceipt,
            quantity,
            amount,
            dateMovement,
            description,
            userLoggedIn,
            idEnterprise,
            idOperator,
            operator,
        } = input;

        try {
            const newRecord = await preReceipts.query("exec create_preReceiptMovement2 " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@quantity = '" + quantity + "', " +
                "@amount = '" + amount + "', " +
                "@dateMovement = '" + dateMovement + "', " +
                "@description = '" + description + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "', " +
                "@idOperator = '" + idOperator + "', " +
                "@operator = '" + operator + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_PRE_RECEIPT_DISCOUNT: async (_: any, {input}: any) => {
        const {
            idPreReceipt,
            name,
            amount,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            const newRecord = await preReceipts.query("exec create_preReceiptDiscount " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@name = '" + name + "', " +
                "@amount = '" + amount + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_PRE_RECEIPT_DISCOUNT2: async (_: any, {input}: any) => {
        const {
            idPreReceipt,
            name,
            amount,
            userLoggedIn,
            idEnterprise,
            idOperator,
            operator,
            dateReceipt
        } = input;

        try {
            const newRecord = await preReceipts.query("exec create_preReceiptDiscount2 " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@name = '" + name + "', " +
                "@amount = '" + amount + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "', " +
                "@idOperator = '" + idOperator + "', " +
                "@operator = '" + operator + "', " +
                "@dateReceipt = '" + dateReceipt + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_PRE_RECEIPT_VERIFIED_EXPENSES: async (_: any, {input}: any) => {
        const {
            idPreReceipt,
            idTrip,
            numTrip,
            idUnit,
            unit,
            idTruckBox,
            truckBox,
            idOperator,
            operator,
            idPayrollExpenseConcept,
            payrollExpenseConcept,
            amount,
            dateVerifiedExpense,
            comments,
            userLoggedIn,
            idEnterprise,
            isDeadlines,
	        quantityDeadlines
        } = input;

        try {
            const newRecord = await preReceipts.query("exec create_preReceiptVerifiedExpense " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@idTrip = '" + idTrip + "', " +
                "@numTrip = '" + numTrip + "', " +
                "@idUnit = '" + idUnit + "', " +
                "@unit = '" + unit + "', " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@truckBox = '" + truckBox + "', " +
                "@idOperator = '" + idOperator + "', " +
                "@operator = '" + operator + "', " +
                "@idPayrollExpenseConcept = '" + idPayrollExpenseConcept + "', " +
                "@payrollExpenseConcept = '" + payrollExpenseConcept + "', " +
                "@amount = '" + amount + "', " +
                "@dateVerifiedExpense = '" + dateVerifiedExpense + "', " +
                "@comments = '" + comments + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "', " +
                "@isDeadlines = '" + isDeadlines + "', " +
                "@quantityDeadlines = '" + quantityDeadlines + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_PRE_RECEIPT: async (_: any, {input}: any) => {
        const {
            idPreReceipt,
            userLoggedIn
        } = input;

        try {
            await preReceipts.query("exec delete_preReceipt " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_EXPENSE_DEADLINE: async (_: any, {input}: any) => {
        const {
            idExpenseDeadline,
            dateDeadline,
            amount,
            idPayrollExpenseConcept,
            payrollExpenseConcept,
            userLoggedIn,
        } = input;

        try {
            const newRecord = await preReceipts.query("exec update_expenseDeadline " +
                "@idExpenseDeadline = '" + idExpenseDeadline + "', " +
                "@dateDeadline = '" + dateDeadline + "', " +
                "@amount = '" + amount + "', " +
                "@idPayrollExpenseConcept = '" + idPayrollExpenseConcept + "', " +
                "@payrollExpenseConcept = '" + payrollExpenseConcept + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_PRE_RECEIPT_VERIFIED_EXPENSES: async (_: any, {input}: any) => {
        const {
            idPreReceiptVerifiedExpense,
            idPreReceipt,
            idTrip,
            numTrip,
            idUnit,
            unit,
            idTruckBox,
            truckBox,
            idOperator,
            operator,
            idPayrollExpenseConcept,
            payrollExpenseConcept,
            amount,
            dateVerifiedExpense,
            comments,
            userLoggedIn,
            idEnterprise,
            isDeadlines,
	        quantityDeadlines
        } = input;

        try {
            const newRecord = await preReceipts.query("exec update_preReceiptVerifiedExpense " +
                "@idPreReceiptVerifiedExpense = '" + idPreReceiptVerifiedExpense + "', " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@idTrip = '" + idTrip + "', " +
                "@numTrip = '" + numTrip + "', " +
                "@idUnit = '" + idUnit + "', " +
                "@unit = '" + unit + "', " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@truckBox = '" + truckBox + "', " +
                "@idOperator = '" + idOperator + "', " +
                "@operator = '" + operator + "', " +
                "@idPayrollExpenseConcept = '" + idPayrollExpenseConcept + "', " +
                "@payrollExpenseConcept = '" + payrollExpenseConcept + "', " +
                "@amount = '" + amount + "', " +
                "@dateVerifiedExpense = '" + dateVerifiedExpense + "', " +
                "@comments = '" + comments + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "', " +
                "@isDeadlines = '" + isDeadlines + "', " +
                "@quantityDeadlines = '" + quantityDeadlines + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_EXPENSE_DEADLINE: async (_: any, {input}: any) => {
        const {
            idPreReceiptVerifiedExpense,
            idExpenseDeadline,
            userLoggedIn
        } = input;

        try {
            await preReceipts.query("exec delete_expenseDeadline " +
                "@idPreReceiptVerifiedExpense = '" + idPreReceiptVerifiedExpense + "', " +
                "@idExpenseDeadline = '" + idExpenseDeadline + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_PRERECEIPTDISCOUNT: async (_: any, {input}: any) => {
        const {
            idPreReceiptDiscount,
            userLoggedIn
        } = input;

        try {
            await preReceipts.query("exec delete_preReceiptDiscount " +
                "@idPreReceiptDiscount = '" + idPreReceiptDiscount + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_PRERECEIPTMOVEMENT: async (_: any, {input}: any) => {
        const {
            idPreReceiptMovement,
            userLoggedIn
        } = input;

        try {
            await preReceipts.query("exec delete_preReceiptMovement " +
                "@idPreReceiptMovement = '" + idPreReceiptMovement + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    },
    EDIT_PRE_RECEIPT_MOVEMENT: async (_: any, {input}: any) => {
        const {
            idPreReceiptMovement,
            idPreReceipt,
            quantity,
            amount,
            dateMovement,
            description,
            userLoggedIn,
            idEnterprise,
            idOperator,
            operator,
        } = input;

        try {
            const newRecord = await preReceipts.query("exec edit_preReceiptMovement " +
                "@idPreReceiptMovement = '" + idPreReceiptMovement + "', " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@quantity = '" + quantity + "', " +
                "@amount = '" + amount + "', " +
                "@dateMovement = '" + dateMovement + "', " +
                "@description = '" + description + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "', " +
                "@idOperator = '" + idOperator + "', " +
                "@operator = '" + operator + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_PRE_RECEIPT_SUPPLEMENTARYPAYROLL: async (_: any, {input}: any) => {
        const {
            idPreReceiptSupplementaryPayroll,
            userLoggedIn
        } = input;

        try {
            await preReceipts.query("exec delete_preReceiptSupplementaryPayroll " +
                "@idPreReceiptSupplementaryPayroll = '" + idPreReceiptSupplementaryPayroll + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    },
    CREATE_PRERECEIPT: async (_: any, {input}: any) => {
        const {
            idOperator,
            operator,
            trips,
            dateReceipt,
            idEnterprise,
            totalSalaryAdvances,
            totalsEmployeeSalary,
            totalVerifiedExpense,
            totalDiscount,
            totalMovements,
            totalSupplement,
            total,
            userLoggedIn,
            numTrips
        } = input;

        try {
            const newRecord = await preReceipts.query("exec create_preReceipts " +
                "@idOperator = '" + idOperator + "', " +
                "@operator = '" + operator + "', " +
                "@trips = '" + trips + "', " +
                "@dateReceipt = '" + dateReceipt + "', " +
                "@idEnterprise = '" + idEnterprise + "', " +
                "@totalSalaryAdvances = '" + totalSalaryAdvances + "', " +
                "@totalsEmployeeSalary = '" + totalsEmployeeSalary + "', " +
                "@totalVerifiedExpense = '" + totalVerifiedExpense + "', " +
                "@totalDiscount = '" + totalDiscount + "', " +
                "@totalMovements = '" + totalMovements + "', " +
                "@totalSupplement = '" + totalSupplement + "', " +
                "@total = '" + total + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@numTrips = '" + numTrips + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_IDPRERECEIPT_VERIFIEDEXPENSES: async (_: any, {input}: any) => {
        const {
            verifiedExpenses,
            idPreReceipt,
            userLoggedIn,
        } = input;

        try {
            await preReceipts.query("exec update_idPreReceipt_VerifiedExpenses " +
                "@verifiedExpenses = '" + verifiedExpenses + "', " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registros editados correctamente"
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_IDPRERECEIPT_DISCOUNTS: async (_: any, {input}: any) => {
        const {
            discounts,
            idPreReceipt,
            userLoggedIn,
        } = input;

        try {
            await preReceipts.query("exec update_idPreReceipt_Discounts " +
                "@discounts = '" + discounts + "', " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registros editados correctamente"
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_IDPRERECEIPT_MOVEMENTS: async (_: any, {input}: any) => {
        const {
            movements,
            idPreReceipt,
            userLoggedIn,
        } = input;

        try {
            await preReceipts.query("exec update_idPreReceipt_Movements " +
                "@movements = '" + movements + "', " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registros editados correctamente"
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_IDPRERECEIPT_SUPPLEMENTARY: async (_: any, {input}: any) => {
        const {
            supplementaryPayroll,
            idPreReceipt,
            userLoggedIn,
        } = input;

        try {
            await preReceipts.query("exec update_idPreReceipt_SupplementaryPayroll " +
                "@supplementaryPayroll = '" + supplementaryPayroll + "', " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registros editados correctamente"
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_TRIPS_FOR_PRERECEIPT: async (_: any, {input}: any) => {
        const {
            idPreReceiptTrip,
            idPreReceipt,
            idTrip,
            numTrip,
            employeeSalary,
            salaryAdvances,
            idEnterprise,
            userLoggedIn,
            status
        } = input;

        try {
            await preReceipts.query("exec set_trips_for_preReceipt " +
                "@idPreReceiptTrip = '" + idPreReceiptTrip + "', " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@idTrip = '" + idTrip + "', " +
                "@numTrip = '" + numTrip + "', " +
                "@employeeSalary = '" + employeeSalary + "', " +
                "@salaryAdvances = '" + salaryAdvances + "', " +
                "@idEnterprise = '" + idEnterprise + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@status = '" + status + "' "
            );
            return "Registros editados correctamente"
        } catch (error) {
            console.log(error);
        }
    },
    EDIT_PRERECEIPT: async (_: any, {input}: any) => {
        const {
            idPreReceipt,
            trips,
            dateReceipt,
            totalSalaryAdvances,
            totalsEmployeeSalary,
            totalVerifiedExpense,
            totalDiscount,
            totalMovements,
            totalSupplement,
            total,
            userLoggedIn,
            numTrips
        } = input;

        try {
            const newRecord = await preReceipts.query("exec edit_preReceipt " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@trips = '" + trips + "', " +
                "@dateReceipt = '" + dateReceipt + "', " +
                "@totalSalaryAdvances = '" + totalSalaryAdvances + "', " +
                "@totalsEmployeeSalary = '" + totalsEmployeeSalary + "', " +
                "@totalVerifiedExpense = '" + totalVerifiedExpense + "', " +
                "@totalDiscount = '" + totalDiscount + "', " +
                "@totalMovements = '" + totalMovements + "', " +
                "@totalSupplement = '" + totalSupplement + "', " +
                "@total = '" + total + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@numTrips = '" + numTrips + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_RECEIPT: async (_: any, {input}: any) => {
        const {
            idPreReceipt,
            idEnterprise,
            userLoggedIn
        } = input;

        try {
            const newRecord = await preReceipts.query("exec create_operatorReceipt " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@idEnterprise = '" + idEnterprise + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
                
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_IDPRERECEIPT_LOCAL_MOVEMENTS: async (_: any, {input}: any) => {
        const {
            localMovements,
            idPreReceipt,
            userLoggedIn,
        } = input;

        try {
            await preReceipts.query("exec update_idPreReceipt_Local_Movements " +
                "@localMovements = '" + localMovements + "', " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registros editados correctamente"
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_PRERECEIPT_LOCAL_MOVEMENT: async (_: any, {input}: any) => {
        const {
            idPreReceiptLocalMovement,
            userLoggedIn
        } = input;

        try {
            await preReceipts.query("exec delete_preReceipt_localMovement " +
                "@idPreReceiptLocalMovement = '" + idPreReceiptLocalMovement + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    },
    CREATE_PRE_RECEIPT_LOCAL_MOVEMENT: async (_: any, {input}: any) => {
        const {
            idPreReceipt,
            quantity,
            amount,
            dateMovement,
            description,
            userLoggedIn,
            idEnterprise,
            idOperator,
            operator,
        } = input;

        try {
            const newRecord = await preReceipts.query("exec create_preReceipt_localMovement " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@quantity = '" + quantity + "', " +
                "@amount = '" + amount + "', " +
                "@dateMovement = '" + dateMovement + "', " +
                "@description = '" + description + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "', " +
                "@idOperator = '" + idOperator + "', " +
                "@operator = '" + operator + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    EDIT_PRE_RECEIPT_LOCAL_MOVEMENT: async (_: any, {input}: any) => {
        const {
            idPreReceiptLocalMovement,
            idPreReceipt,
            quantity,
            amount,
            dateMovement,
            description,
            userLoggedIn,
            idEnterprise,
            idOperator,
            operator,
        } = input;

        try {
            const newRecord = await preReceipts.query("exec edit_preReceipt_localMovement " +
                "@idPreReceiptLocalMovement = '" + idPreReceiptLocalMovement + "', " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@quantity = '" + quantity + "', " +
                "@amount = '" + amount + "', " +
                "@dateMovement = '" + dateMovement + "', " +
                "@description = '" + description + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "', " +
                "@idOperator = '" + idOperator + "', " +
                "@operator = '" + operator + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    }
};

export default preReceiptsMutations;