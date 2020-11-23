
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
    },
    usernameValidation: {
        in: ['body'],
        exists: {
            options: {
                checkNull: true,
                checkFalsy: true,
            },
            errorMessage: 'username is required',
        }
    },
    passwordValidation: {
        in: ['body'],
        exists: {
            options: {
                checkNull: true,
                checkFalsy: true,
            },
            errorMessage: 'password is required',
        }
    }
}

const validationSchema = {
    createFolderSchema: {
        name: validations.nameValidation
    },
    createFileSchema: {
        name: validations.nameValidation
    },
    loginValidation: {
        username: validations.usernameValidation,
        password: validations.passwordValidation
    }
}

module.exports = {
    validationSchema
};