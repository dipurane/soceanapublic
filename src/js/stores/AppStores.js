/**
 * Created by nikhila on 9/22/2015.
 */
let AppDispatcher = require('../dispatcher/AppDispatcher');
let EventEmitter = require('events').EventEmitter;
let AppConstants = require('../constants/AppConstants');
let assign = require('object-assign');
const CHANGE_EVENT = 'CHANGE_EVENT';

let user = {
    _type: '',
    set type(type) {
        this._type = type;
    },
    get type() {
        return this._type;
    }
};

var setUserType = function (type) {
    user.type = type;
    console.log('current user type >> ', type);
};

let AppStores = assign({}, EventEmitter.prototype, {
    getUserType: function () {
        return user.type;
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addEventListener: function (callback) {
        this.on(CHANGE_EVENT, callback)
    },
    removeEventListener: function (callback) {
        this.removeEventListener(CHANGE_EVENT, callback);
    },
    dispatchHandle: AppDispatcher.register(function (payload) {
        var action = payload.action;

        switch (action.actionType) {
            case AppConstants.TYPE_UPDATED:
                setUserType(action.data);
                AppStores.emitChange();
                break;
        }

        return true;
    })
});

export default AppStores;