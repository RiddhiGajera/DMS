
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
    },
    idValidation: {
        in: ['body'],
        exists: {
            options: {
                checkNull: true,
                checkFalsy: true,
            },
            errorMessage: 'folder id is required',
        },
        custom: {
            options: (value, { req, location, path }) => {
               const { body: { to, from }} = req;
               return to === from ? false : true;
            },
            errorMessage: 'To move the file Source and Destination folder must not be same',
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
    },
    moveFileSchema: {
        to: validations.idValidation,
        from: validations.idValidation,
    }
}

module.exports = {
    validationSchema
};