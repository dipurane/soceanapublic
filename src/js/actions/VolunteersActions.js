/**
 * Created by nikhila on 9/22/2015.
 */
let AppDispatcher = require('../dispatcher/AppDispatcher');
let AppConstants = require('../constants/AppConstants');

let VolunteersActions = {
    setType(type) {
        AppDispatcher.volunteersAction({
            actionType: AppConstants.TYPE_UPDATED,
            data: type
        });
    }
};

module.exports = VolunteersActions;