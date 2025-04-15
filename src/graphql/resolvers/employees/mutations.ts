import { employees } from "../../../db/Entities/employees";

const employeesMutations = {

    UPDATE_EMPLOYEE: async (_: any, {input}: any) => {
        const {
            idEmployees, 
            firstName,
            paternalLastName,
            maternalLastName,
            mailNotification, 
            phone,
            employee_number,
            nomipaq,
            nickname,
            DateOfBirth,
            gender,
            civilStatus,
            children,
            startDate,
            idJobTitle,
            businessPhone,
            address,
            outsideAddressNumber,
            insideAddressNumber,
            neighborhood,
            idCountry,
            idState,
            idTown,
            CP,
            socialSecurityNumber,
            CURP,
            RFC,
            CPSAT,
            bankAccount, 
            expenseAccount,
            netSalary,
            grossSalary,
            IDS,
            allergies,
            Disease,
            surgeries,
            medicalTreatments,
            idTypeBlood,
            userLoggedIn,
            infonavitCredit,
            shoeSizes,
            dressVestSizes,
            tshirtSizes
        } = input;
        try {
            const newRecord = await employees.query("exec update_employees " +
            "@idEmployees = '"+idEmployees+"', " +
            "@firstName= '"+firstName+"', " + 
            "@paternalLastName = '"+paternalLastName+"', " + 
            "@maternalLastName = '"+maternalLastName+"', " +
            "@mailNotification = '"+mailNotification+"', " +
            "@phone = '"+phone+"', " +
            "@employee_number = '"+employee_number+"' , " +
            "@nomipaq = '"+nomipaq+"', " +
            "@nickname = '"+nickname+"', " +
            "@DateOfBirth = '"+DateOfBirth+"', " +
            "@gender = '"+gender+"', " +
            "@civilStatus = '"+civilStatus+"', " +
            "@children = '"+children+"', " +
            "@startDate = '"+startDate+"', " +
            "@idJobTitle = '"+idJobTitle+"', " +
            "@businessPhone = '"+businessPhone+"', " +
            "@address = '"+address+"', " +
            "@outsideAddressNumber = '"+outsideAddressNumber+"', " +
            "@insideAddressNumber = '"+insideAddressNumber+"', " +
            "@neighborhood = '"+neighborhood+"', " +
            "@idCountry = '"+idCountry+"', " +
            "@idState = '"+idState+"', " +
            "@idTown = '"+idTown+"', " +
            "@CP = '"+CP+"', " +
            "@socialSecurityNumber = '"+socialSecurityNumber+"', " +
            "@CURP = '"+CURP+"', " +
            "@RFC = '"+RFC+"', " +
            "@CPSAT = '"+CPSAT+"', " +
            "@bankAccount = '"+bankAccount+"', " +
            "@expenseAccount = '"+expenseAccount+"', " +
            "@netSalary = '"+netSalary+"', " +
            "@grossSalary = '"+grossSalary+"', " +
            "@IDS = '"+IDS+"', " +
            "@allergies = '"+allergies+"', " +
            "@Disease = '"+Disease+"', " +
            "@surgeries = '"+surgeries+"', " +
            "@medicalTreatments = '"+medicalTreatments+"', " +
            "@idTypeBlood = '"+idTypeBlood+"', " +
            "@userLoggedIn = '"+userLoggedIn+"', " +
            "@infonavitCredit = '"+infonavitCredit+"', " +
            "@shoeSizes = '"+shoeSizes+"', " +
            "@dressVestSizes = '"+dressVestSizes+"', " +
            "@tshirtSizes = '"+tshirtSizes+"' ");
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
    SET_EMPLOYEE_IMAGE: async (_: any, {input}: any) => {
        const { idEmployee, link, userLoggedIn } = input;
        try {
            await employees.query("exec set_employee_image @idEmployee = '"+idEmployee+"', @link = '"+link+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento agregado correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_EMPLOYEE: async (_: any, {input}: any) => {
        const {
            idEmployees, 
            firstName,
            paternalLastName,
            maternalLastName,
            mailNotification, 
            phone,
            employee_number,
            nomipaq,
            nickname,
            DateOfBirth,
            gender,
            civilStatus,
            children,
            startDate,
            idJobTitle,
            businessPhone,
            address,
            outsideAddressNumber,
            insideAddressNumber,
            neighborhood,
            idCountry,
            idState,
            idTown,
            CP,
            socialSecurityNumber,
            CURP,
            RFC,
            CPSAT,
            bankAccount, 
            expenseAccount,
            netSalary,
            grossSalary,
            IDS,
            allergies,
            Disease,
            surgeries,
            medicalTreatments,
            idTypeBlood,
            userLoggedIn,
            infonavitCredit,
            shoeSizes,
            dressVestSizes,
            tshirtSizes
        } = input;
        try {
            const newRecord = await employees.query("exec create_employees " +
            "@idEmployees = '"+idEmployees+"', " +
            "@firstName= '"+firstName+"', " + 
            "@paternalLastName = '"+paternalLastName+"', " + 
            "@maternalLastName = '"+maternalLastName+"', " +
            "@mailNotification = '"+mailNotification+"', " +
            "@phone = '"+phone+"', " +
            "@employee_number = '"+employee_number+"' , " +
            "@nomipaq = '"+nomipaq+"', " +
            "@nickname = '"+nickname+"', " +
            "@DateOfBirth = '"+DateOfBirth+"', " +
            "@gender = '"+gender+"', " +
            "@civilStatus = '"+civilStatus+"', " +
            "@children = '"+children+"', " +
            "@startDate = '"+startDate+"', " +
            "@idJobTitle = '"+idJobTitle+"', " +
            "@businessPhone = '"+businessPhone+"', " +
            "@address = '"+address+"', " +
            "@outsideAddressNumber = '"+outsideAddressNumber+"', " +
            "@insideAddressNumber = '"+insideAddressNumber+"', " +
            "@neighborhood = '"+neighborhood+"', " +
            "@idCountry = '"+idCountry+"', " +
            "@idState = '"+idState+"', " +
            "@idTown = '"+idTown+"', " +
            "@CP = '"+CP+"', " +
            "@socialSecurityNumber = '"+socialSecurityNumber+"', " +
            "@CURP = '"+CURP+"', " +
            "@RFC = '"+RFC+"', " +
            "@CPSAT = '"+CPSAT+"', " +
            "@bankAccount = '"+bankAccount+"', " +
            "@expenseAccount = '"+expenseAccount+"', " +
            "@netSalary = '"+netSalary+"', " +
            "@grossSalary = '"+grossSalary+"', " +
            "@IDS = '"+IDS+"', " +
            "@allergies = '"+allergies+"', " +
            "@Disease = '"+Disease+"', " +
            "@surgeries = '"+surgeries+"', " +
            "@medicalTreatments = '"+medicalTreatments+"', " +
            "@idTypeBlood = '"+idTypeBlood+"', " +
            "@userLoggedIn = '"+userLoggedIn+"', " +
            "@infonavitCredit = '"+infonavitCredit+"', " +
            "@shoeSizes = '"+shoeSizes+"', " +
            "@dressVestSizes = '"+dressVestSizes+"', " +
            "@tshirtSizes = '"+tshirtSizes+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_EMPLOYEE: async (_: any, {input}: any) => {
        const { idEmployee, userLoggedIn, dateRemoved, comment } = input;
        try {
            await employees.query("exec delete_employee @idEmployee = '"+idEmployee+"', @userLoggedIn = '"+userLoggedIn+"', @dateRemoved = '"+dateRemoved+"', @comment = '"+comment+"' ");
            return 'Baja de empleado exitosa';
        } catch (error) {
            console.log(error);
        }
    },
    REENTRY_EMPLOYEE: async (_: any, {input}: any) => {
        const { idEmployee, userLoggedIn, dateReentry, comment, idEnterprise } = input;
        try {
            await employees.query("exec reentry_employee @idEmployee = '"+idEmployee+"', @userLoggedIn = '"+userLoggedIn+"', @dateReentry = '"+dateReentry+"', @comment = '"+comment+"', @idEnterprise = '"+ idEnterprise +"'");
            return 'Reingreso de empleado exitoso';
        } catch (error) {
            console.log(error);
        }
    },
    SET_EMPLOYEE_TYPERECEIPT: async (_: any, {input}: any) => {
        const {idEmployee, idTypeReceipt, userLoggedIn} = input;
        try {
            const newRecord = await employees.query("exec set_Employee_typeReceipt @idEmployee = '"+idEmployee+"', @idTypeReceipt = '"+idTypeReceipt+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_EMPLOYEE_TYPERECEIPT: async (_: any, {input}: any) => {
        const {idEmployeeTypeReceipt, userLoggedIn} = input;
        try {
            await employees.query("exec delete_employee_typeReceipt @idEmployeeTypeReceipt = '"+idEmployeeTypeReceipt+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return "Registro eliminado correctamente";
        } catch (error) {
            console.log(error);
        }
    },
    SET_LINK_EMPLOYEE_TYPERECEIPT: async (_: any, {input}: any) => {
        const { idEmployeeTypeReceipt, link, userLoggedIn } = input;
        try {
            await employees.query("exec set_employees_typeReceipt_documents @idEmployeeTypeReceipt = '"+idEmployeeTypeReceipt+"', @link = '"+link+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento agregado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_EMPLOYEE_PERSONALINFORMATION: async (_: any, {input}: any) => {
        const {
            firstName,
            paternalLastName,
            maternalLastName,
            mailNotification, 
            phone,
            employee_number,
            nomipaq,
            nickname,
            address,
            outsideAddressNumber,
            insideAddressNumber,
            neighborhood,
            idCountry,
            idState,
            idTown,
            CP,
            userLoggedIn,
            DateOfBirth,
            gender,
            civilStatus,
            idEnterprise
        } = input;
        try {
            const newRecord = await employees.query("exec create_employees_personal_information "
            +"@firstName = '"+firstName+"', "
            +"@paternalLastName = '"+paternalLastName+"', "
            +"@maternalLastName = '"+maternalLastName+"', "
            +"@mailNotification = '"+mailNotification+"', "
            +"@phone = '"+phone+"', "
            +"@employee_number = '"+employee_number+"', "
            +"@nomipaq = '"+nomipaq+"', "
            +"@nickname = '"+nickname+"', "
            +"@address = '"+address+"', "
            +"@outsideAddressNumber = '"+outsideAddressNumber+"', "
            +"@insideAddressNumber = '"+insideAddressNumber+"', "
            +"@neighborhood = '"+neighborhood+"', "
            +"@idCountry = '"+idCountry+"', "
            +"@idState = '"+idState+"', "
            +"@idTown = '"+idTown+"', "
            +"@CP = '"+CP+"', "
            +"@userLoggedIn = '"+userLoggedIn+"', "
            +"@DateOfBirth = '"+DateOfBirth+"', "
            +"@gender = '"+gender+"', "
            +"@civilStatus = '"+civilStatus+"', "
            +"@idEnterprise = '"+idEnterprise+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_EMPLOYEE_PERSONALINFORMATION: async (_: any, {input}: any) => {
        const {
            idEmployees, 
            firstName,
            paternalLastName,
            maternalLastName,
            mailNotification, 
            phone,
            employee_number,
            nomipaq,
            nickname,
            address,
            outsideAddressNumber,
            insideAddressNumber,
            neighborhood,
            idCountry,
            idState,
            idTown,
            town,
            CP,
            userLoggedIn,
            DateOfBirth,
            gender,
            civilStatus,
            idEnterprise
        } = input;
        try {
            const newRecord = await employees.query("exec update_employees_personal_information " +
            "@idEmployees = '"+idEmployees+"', " +
            "@firstName= '"+firstName+"', " + 
            "@paternalLastName = '"+paternalLastName+"', " + 
            "@maternalLastName = '"+maternalLastName+"', " +
            "@mailNotification = '"+mailNotification+"', " +
            "@phone = '"+phone+"', " +
            "@employee_number = '"+employee_number+"' , " +
            "@nomipaq = '"+nomipaq+"', " +
            "@nickname = '"+nickname+"', " +
            "@address = '"+address+"', " +
            "@outsideAddressNumber = '"+outsideAddressNumber+"', " +
            "@insideAddressNumber = '"+insideAddressNumber+"', " +
            "@neighborhood = '"+neighborhood+"', " +
            "@idCountry = '"+idCountry+"', " +
            "@idState = '"+idState+"', " +
            "@idTown = '"+idTown+"', " +
            "@town = '"+town+"', " +
            "@CP = '"+CP+"', " +
            "@userLoggedIn = '"+userLoggedIn+"', " +
            "@DateOfBirth = '"+DateOfBirth+"', " +
            "@gender = '"+gender+"', " +
            "@civilStatus = '"+civilStatus+"', " +
            "@idEnterprise = '"+idEnterprise+"' ");
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_EMPLOYEE_INCOME_DATA: async (_: any, {input}: any) => {
        const {
            idEmployees,
            startDate,
            idJobTitle,
            businessPhone,
            socialSecurityNumber,
            CURP,
            RFC,
            CPSAT,
            bankAccount, 
            expenseAccount,
            netSalary,
            grossSalary,
            IDS,
            userLoggedIn,
            infonavitCredit,
        } = input;
        try {
            const newRecord = await employees.query("exec update_employees_income_data " +
            "@idEmployees = '"+idEmployees+"', " +
            "@startDate = '"+startDate+"', " +
            "@idJobTitle = '"+idJobTitle+"', " +
            "@businessPhone = '"+businessPhone+"', " +
            "@socialSecurityNumber = '"+socialSecurityNumber+"', " +
            "@CURP = '"+CURP+"', " +
            "@RFC = '"+RFC+"', " +
            "@CPSAT = '"+CPSAT+"', " +
            "@bankAccount = '"+bankAccount+"', " +
            "@expenseAccount = '"+expenseAccount+"', " +
            "@netSalary = '"+netSalary+"', " +
            "@grossSalary = '"+grossSalary+"', " +
            "@IDS = '"+IDS+"', " +
            "@userLoggedIn = '"+userLoggedIn+"', " +
            "@infonavitCredit = '"+infonavitCredit+"' ");
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_EMPLOYEE_MEDICAL_INFORMATION: async (_: any, {input}: any) => {
        const {
            idEmployees,
            allergies,
            Disease,
            surgeries,
            medicalTreatments,
            idTypeBlood,
            userLoggedIn
        } = input;
        try {
            const newRecord = await employees.query("exec update_employees_medical_information " +
            "@idEmployees = '"+idEmployees+"', " +
            "@allergies = '"+allergies+"', " +
            "@Disease = '"+Disease+"', " +
            "@surgeries = '"+surgeries+"', " +
            "@medicalTreatments = '"+medicalTreatments+"', " +
            "@idTypeBlood = '"+idTypeBlood+"', " +
            "@userLoggedIn = '"+userLoggedIn+"' ");

            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_EMPLOYEE_WORKEQUIPMENT: async (_: any, {input}: any) => {
        const {
            idEmployees, 
            shoeSizes,
            dressVestSizes,
            tshirtSizes,
            userLoggedIn,
        } = input;
        try {
            const newRecord = await employees.query("exec update_employees_work_equipment " +
            "@idEmployees = '"+idEmployees+"', " +
            "@shoeSizes = '"+shoeSizes+"', " +
            "@dressVestSizes = '"+dressVestSizes+"', " +
            "@tshirtSizes = '"+tshirtSizes+"', " +
            "@userLoggedIn = '"+userLoggedIn+"' ");
            
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
};

export default employeesMutations;