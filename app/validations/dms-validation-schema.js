
const validations = {
    nameValidation: {
        in: ['body'],
        exists: {
            options: {
                checkNull: true,
                checkFalsy: true,
            },
            errorMessage: 'Folder name is required',
        }
    }
}

const validationSchema = {
    createFolderSchema: {
        name: validations.nameValidation
    }
}

module.exports = {
    validationSchema
};